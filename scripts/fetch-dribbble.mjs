import { chromium } from "playwright";

const shotUrl = process.argv[2];
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(shotUrl, { waitUntil: "domcontentloaded", timeout: 90000 });
await page.waitForTimeout(6000);

const imgs = await page.evaluate(() =>
  [...document.querySelectorAll("img")]
    .map((img) => ({ src: img.currentSrc || img.src, alt: img.alt || "" }))
    .filter((item) => item.src.includes("cdn.dribbble.com/userupload"))
);

for (const img of imgs) console.log(JSON.stringify(img));
await browser.close();
