import { test, expect } from "@playwright/test";

test("Should navigate to blog page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Blog" }).click();
  await expect(page).toHaveURL("https://blog.bl4ko.com/");
});
