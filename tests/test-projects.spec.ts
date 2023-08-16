import { test, expect } from "@playwright/test";

test("Should navigate to projects page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Projects" }).click();
  await expect(page).toHaveURL("/projects");
  await expect(page.getByRole("heading", { name: "Projects" })).toContainText(
    "Projects"
  );
});
