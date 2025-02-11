import { test, expect } from "@playwright/test";

test("Test index page theme toggle button", async ({ page }) => {
  await page.goto("/");
  const toggleThemeLocator = await page.getByLabel("Toggle theme");
  await toggleThemeLocator.click();

  const htmlLocator = await page.locator("html");
  await expect(htmlLocator).toHaveAttribute("data-theme");
  await expect(htmlLocator).toHaveAttribute("data-theme", "light");
});

test("Test index footer", async ({ page }) => {
  await page.goto("/");
  const copyrightLocator = await page.getByText(
    `bl4ko, Gašper Oblak. All rights reserved.`,
  );
  await expect(copyrightLocator).toBeVisible();
});

test("Ensure there is profile picture displayed", async ({ page }) => {
  await page.goto("/");
  await expect(await page.getByRole("img", { name: "Bl4ko" })).toBeVisible();
});

test("Ensure that the index page contains all headings", async ({ page }) => {
  await page.goto("/");
  await expect(
    await page.getByRole("heading", { name: "About" }),
  ).toBeVisible();
  await expect(await page.getByRole("heading", { name: "Bio" })).toBeVisible();
  await expect(
    await page.getByRole("heading", { name: "Hobbies" }),
  ).toBeVisible();
});
