import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const out = path.join(process.cwd(), "verify-shots");
await mkdir(out, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(400);
await page.screenshot({ path: path.join(out, "shader-home.png") });

await page.goto("http://127.0.0.1:3000/shader-demo", { waitUntil: "networkidle" });
await page.waitForTimeout(400);
await page.screenshot({ path: path.join(out, "shader-demo.png") });

await page.setViewportSize({ width: 390, height: 844 });
await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(400);
await page.screenshot({ path: path.join(out, "shader-home-mobile.png") });

await browser.close();
console.log("ok");
