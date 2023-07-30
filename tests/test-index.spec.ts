import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByLabel("Toggle theme").click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.getByRole("img", { name: "Bl4ko" }).click();
  await page.getByText("© 2023 Bl4ko. Copy as much as you want.").click();
  await page.getByRole("navigation").click();
  await page.getByText("Hello, I'm a tech enthusiast from Slovenia").click();
});
