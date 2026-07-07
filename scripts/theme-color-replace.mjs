#!/usr/bin/env node
/**
 * Replaces common hardcoded brand colors in globals.css with CSS variables.
 * Run once: node scripts/theme-color-replace.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "../src/app/globals.css");
let css = readFileSync(file, "utf8");

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
  [/#e0[eE]7[fF][fF]/g, "var(--accent-soft-bg)"],
  [/#c7[dD]2[fF][eE]/g, "var(--hero-badge-text)"],
  [/#a5[bB]4[fF][cC]/g, "var(--hero-accent)"],
  [/#047857/g, "var(--success)"],
  [/#070[bB]16/g, "var(--hero-bg)"],
  [/#0[bB]1121/g, "var(--footer-bg)"],
  [/rgba\(79,\s*70,\s*229,\s*0\.1\)/g, "var(--accent-soft)"],
  [/rgba\(79,\s*70,\s*229,\s*0\.15\)/g, "var(--brand-mark-glow)"],
  [/rgba\(79,\s*70,\s*229,\s*0\.2\)/g, "var(--brand-mark-glow-hover)"],
  [/rgba\(79,\s*70,\s*229,\s*0\.22\)/g, "var(--accent-border)"],
  [/rgba\(79,\s*70,\s*229,\s*0\.25\)/g, "var(--accent-border)"],
  [/rgba\(79,\s*70,\s*229,\s*0\.35\)/g, "var(--accent-glow)"],
  [/rgba\(79,\s*70,\s*229,\s*0\.65\)/g, "var(--accent-glow)"],
  [/rgba\(99,\s*102,\s*241,\s*0\.1\)/g, "var(--accent-soft)"],
  [/rgba\(99,\s*102,\s*241,\s*0\.16\)/g, "var(--accent-soft)"],
  [/rgba\(99,\s*102,\s*241,\s*0\.2\)/g, "var(--hero-badge-bg)"],
  [/rgba\(99,\s*102,\s*241,\s*0\.25\)/g, "var(--hero-badge-bg)"],
  [/rgba\(99,\s*102,\s*241,\s*0\.55\)/g, "var(--accent-glow)"],
  [/rgba\(165,\s*180,\s*252,\s*0\.35\)/g, "var(--hero-badge-border)"],
  [/rgba\(165,\s*180,\s*252,\s*0\.4\)/g, "var(--hero-badge-border)"],
  [/rgba\(129,\s*140,\s*248,\s*0\.35\)/g, "var(--accent-glow)"],
  [/rgba\(129,\s*140,\s*248,\s*0\.4\)/g, "var(--accent-border)"],
];

let count = 0;
for (const [pattern, replacement] of replacements) {
  const before = css;
  css = css.replace(pattern, replacement);
  if (css !== before) count++;
}

writeFileSync(file, css);
console.log(`Applied ${count} replacement patterns to globals.css`);
