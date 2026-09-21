import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const H1 =
  "Automatizáld a monoton feladatokat. Skálázd a profitod új munkaerő nélkül.";

test.describe("landing", () => {
  test("loads with the hero headline", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1, name: H1 })).toBeVisible();
  });

  test("email form rejects empty and invalid input", async ({ page }) => {
    await page.goto("/");
    const form = page.locator("#demo");
    await form.getByRole("button", { name: "Kérem az ingyenes demót" }).click();
    await expect(form.getByRole("alert")).toHaveText(
      "Adj meg egy érvényes email címet.",
    );
    await expect(form.getByRole("status")).toHaveCount(0);

    await form
      .getByPlaceholder("Add meg a munkahelyi email címed...")
      .fill("not-an-email");
    await form.getByRole("button", { name: "Kérem az ingyenes demót" }).click();
    await expect(form.getByRole("alert")).toHaveText(
      "Adj meg egy érvényes email címet.",
    );
    await expect(form.getByRole("status")).toHaveCount(0);
  });

  test("email form submits a valid address", async ({ page }) => {
    await page.goto("/");
    const form = page.locator("#demo");
    await form
      .getByPlaceholder("Add meg a munkahelyi email címed...")
      .fill("demo@kkv.hu");
    await form.getByRole("button", { name: "Kérem az ingyenes demót" }).click();
    await expect(form.getByRole("status")).toHaveText(
      "Köszönjük! Hamarosan keresni fogunk a demó időpontjával kapcsolatban.",
    );
  });

  test("header CTA scrolls to the hero form", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("contentinfo").scrollIntoViewIfNeeded();
    await page.getByRole("link", { name: "Ingyenes Demo Foglalása" }).click();
    await expect(page.locator("#demo")).toBeInViewport();
  });

  test("mailto links are present", async ({ page }) => {
    await page.goto("/");
    const mailtos = page.locator('a[href="mailto:buda.benedek2@gmail.com"]');
    await expect(mailtos).toHaveCount(2);
    await expect(mailtos.first()).toBeVisible();
  });

  test("has no serious axe violations", async ({ page }) => {
    await page.goto("/");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
