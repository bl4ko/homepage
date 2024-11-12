import { test  } from "@playwright/test";

test("Should navigate to blog page", async ({ page }) => {
  await page.goto("/");
  const linkLocator = await page.getByRole("link", { name: "Blog" });
  await linkLocator.click();
  // await expect(page).toHaveURL("https://blog.bl4ko.com/");
});
