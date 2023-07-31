import { test, expect } from "@playwright/test";

test("Should navigate to projects page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Projects" }).click();
  await expect(page).toHaveURL("http://localhost:3000/projects");
  await expect(page.getByRole("heading", { name: "Projects" })).toContainText(
    "Projects"
  );
});
