#!/usr/bin/env node
/**
 * Replaces hardcoded brand colors across src with CSS variables.
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, extname } from "path";

const SRC = join(process.cwd(), "src");

const replacements = [
  [/#4[fF]46[eE]5/g, "var(--accent)"],
  [/#4338[cC][aA]/g, "var(--accent-hover)"],
  [/#6366[fF]1/g, "var(--accent-secondary)"],
  [/#818[cC][fF]8/g, "var(--hero-accent)"],
  [/#386[dD][fF][fF]/g, "var(--accent-secondary)"],
  [/#7[cC]3[aA][eE][dD]/g, "var(--accent-hover)"],
  [/#2563[eE][bB]/g, "var(--accent)"],
  [/#0[Aa]1[fF]4[eE]/g, "var(--heading)"],
  [/#eef2[fF][fF]/g, "var(--accent-soft-bg)"],
  [/#e0[eE]7[fF][fF]/g, "var(--hero-badge-text)"],
  [/#c7[dD]2[fF][eE]/g, "var(--hero-badge-text)"],
  [/#a5[bB]4[fF][cC]/g, "var(--hero-accent)"],
  [/#070[bB]16/g, "var(--hero-bg)"],
  [/#0[bB]1121/g, "var(--footer-bg)"],
  [/#4ade80/g, "var(--success)"],
  [/rgba\(79,\s*70,\s*229,\s*0\.1\)/g, "var(--accent-soft)"],
  [/rgba\(79,\s*70,\s*229,\s*0\.15\)/g, "var(--brand-mark-glow)"],
  [/rgba\(79,\s*70,\s*229,\s*0\.2\)/g, "var(--brand-mark-glow-hover)"],
  [/rgba\(79,\s*70,\s*229,\s*0\.22\)/g, "var(--accent-border)"],
  [/rgba\(79,\s*70,\s*229,\s*0\.25\)/g, "var(--accent-border)"],
  [/rgba\(79,\s*70,\s*229,\s*0\.35\)/g, "var(--accent-glow)"],
  [/rgba\(99,\s*102,\s*241,\s*0\.1\)/g, "var(--accent-soft)"],
  [/rgba\(99,\s*102,\s*241,\s*0\.16\)/g, "var(--accent-soft)"],
  [/rgba\(99,\s*102,\s*241,\s*0\.2\)/g, "var(--hero-badge-bg)"],
  [/rgba\(99,\s*102,\s*241,\s*0\.22\)/g, "var(--hero-badge-bg)"],
  [/rgba\(99,\s*102,\s*241,\s*0\.25\)/g, "var(--hero-badge-bg)"],
  [/rgba\(99,\s*102,\s*241,\s*0\.28\)/g, "var(--hero-badge-bg)"],
  [/rgba\(165,\s*180,\s*252,\s*0\.35\)/g, "var(--hero-badge-border)"],
  [/rgba\(165,\s*180,\s*252,\s*0\.4\)/g, "var(--hero-badge-border)"],
  [/rgba\(129,\s*140,\s*248,\s*0\.35\)/g, "var(--accent-glow)"],
  [/rgba\(129,\s*140,\s*248,\s*0\.4\)/g, "var(--accent-border)"],
  [/rgba\(74,\s*222,\s*128,\s*0\.45\)/g, "var(--success-soft)"],
  [/color:\s*#fff\b/g, "color: var(--hrc-text)"],
  [/color:\s*#ffffff\b/g, "color: var(--hero-text)"],
];

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (!entry.includes("node_modules")) walk(full, files);
    } else if ([".js", ".jsx", ".ts", ".tsx", ".css"].includes(extname(entry))) {
      files.push(full);
    }
  }
  return files;
}

let total = 0;
for (const file of walk(SRC)) {
  if (file.includes("themes.ts")) continue;
  let content = readFileSync(file, "utf8");
  const original = content;
  for (const [pattern, replacement] of replacements) {
    content = content.replace(pattern, replacement);
  }
  if (content !== original) {
    writeFileSync(file, content);
    total++;
  }
}

console.log(`Updated ${total} files with theme CSS variables`);
