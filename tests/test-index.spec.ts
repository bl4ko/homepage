import { test, expect } from "@playwright/test";

test("Test index page toggle button", async ({ page }) => {
  await page.goto("/");
  const toggleThemeLocator = await page.getByLabel("Toggle theme");
  await toggleThemeLocator.click();

  const htmlLocator = await page.locator("html");
  await expect(htmlLocator).toHaveAttribute("data-theme");
  await expect(htmlLocator).toHaveAttribute("data-theme", "light");

  const imgLocator = await page.getByRole("img", { name: "Bl4ko" });
  await expect(imgLocator).toBeAttached();
});

test("Test index footer", async ({ page }) => {
  await page.goto("/");
  const copyrightLocator = await page.getByText(
    `© ${new Date().getFullYear()} Bl4ko. Copy as much as you want.`,
  );
  await expect(copyrightLocator).toBeTruthy();
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
