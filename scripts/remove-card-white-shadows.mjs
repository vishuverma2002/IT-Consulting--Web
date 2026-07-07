#!/usr/bin/env node
/**
 * Removes white inset box-shadows and white shine gradients from card styles.
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, extname } from "path";

const ROOT = join(process.cwd(), "src");

const WHITE_INSET =
  /,?\s*inset\s+0\s+1px\s+(?:0|1px)\s+rgba\(\s*255\s*,\s*255\s*,\s*255\s*,[^)]+\)/gi;

const WHITE_SHEEN_GRADIENT =
  /rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.(?:25|3|35|4|45|5|55|6|65|7|8|9|1)\s*\)/gi;

const WHITE_BORDER_HOVER = /border-color:\s*rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.25\s*\)/g;

function cleanContent(content) {
  let result = content;

  // Strip white inset shadows (repeat until stable for chained commas)
  for (let i = 0; i < 5; i++) {
    const next = result.replace(WHITE_INSET, "");
    if (next === result) break;
    result = next;
  }

  // Fix broken box-shadow declarations
  result = result.replace(/box-shadow:\s*,\s*/g, "box-shadow: ");
  result = result.replace(/box-shadow:\s*;/g, "box-shadow: none;");
  result = result.replace(/box-shadow:\s*\n\s*,/g, "box-shadow:\n    ");

  // White sheen in gradients → transparent
  result = result.replace(WHITE_SHEEN_GRADIENT, "transparent");

  // White border on card icon hover → accent border
  result = result.replace(
    WHITE_BORDER_HOVER,
    "border-color: var(--accent-border)",
  );

  return result;
}

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (!entry.includes("node_modules")) walk(full, files);
    } else if ([".css", ".js", ".tsx"].includes(extname(entry))) {
      files.push(full);
    }
  }
  return files;
}

let count = 0;
for (const file of walk(ROOT)) {
  const original = readFileSync(file, "utf8");
  const cleaned = cleanContent(original);
  if (cleaned !== original) {
    writeFileSync(file, cleaned);
    count++;
  }
}

console.log(`Cleaned white card shadows in ${count} files`);
