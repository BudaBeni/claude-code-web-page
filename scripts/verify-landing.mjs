import { chromium, expect } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const out = path.join(process.cwd(), "verify-shots");
await mkdir(out, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });

await page.screenshot({
  path: path.join(out, "desktop-hero.png"),
  fullPage: false,
});
await page.screenshot({
  path: path.join(out, "desktop-full.png"),
  fullPage: true,
});

const form = page.locator("#demo");
await form.getByRole("button", { name: "Kérem az ingyenes demót" }).click();
await form.getByRole("alert").waitFor();
await page.screenshot({ path: path.join(out, "desktop-error.png") });

await form
  .getByPlaceholder("Add meg a munkahelyi email címed...")
  .fill("demo@kkv.hu");
await form.getByRole("button", { name: "Kérem az ingyenes demót" }).click();
await form.getByRole("status").waitFor();
await page.screenshot({ path: path.join(out, "desktop-success.png") });

await page.getByRole("contentinfo").scrollIntoViewIfNeeded();
await page.getByRole("link", { name: "Ingyenes Demo Foglalása" }).click();
await expect(page.locator("#demo")).toBeInViewport();

await page.setViewportSize({ width: 390, height: 844 });
await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
await page.screenshot({
  path: path.join(out, "mobile-hero.png"),
  fullPage: false,
});
await page.screenshot({
  path: path.join(out, "mobile-full.png"),
  fullPage: true,
});

await browser.close();
console.log("ok", out);
