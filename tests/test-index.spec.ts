import { test, expect } from "@playwright/test";

test("Test index page toggle button", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("Toggle theme").click();
  await page.waitForTimeout(1000);
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.getByRole("img", { name: "Bl4ko" }).click();
});

test("Test index footer", async ({ page }) => {
  await page.goto("/");
  await page
    .getByText(
      `© ${new Date().getFullYear()} Bl4ko. Copy as much as you want.`,
    )
    .click();
});

test("Ensure there is profile picture displayed", async ({ page }) => {
  await page.goto("/");
  expect(await page.isVisible('img[alt="Bl4ko"]')).toBe(true);
});

test("Ensure that the index page contains all headings", async ({ page }) => {
  await page.isVisible("h3[text=About]");
  await page.isVisible("h3[text=Bio]");
  await page.isVisible("h3[text=Hobbies]");
});
