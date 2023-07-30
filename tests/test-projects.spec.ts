import { test, expect } from "@playwright/test";

test("Should navigate to projects page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.click("text=Projects");
  await expect(page).toHaveURL("http://localhost:3000/projects");
  await expect(page.locator("h1")).toContainText("Projects");
});
