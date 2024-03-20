import { test, expect } from "@playwright/test";

test("Should navigate to projects page", async ({ page }) => {
  await page.goto("/");
  const projectsLinkLocator = await page.getByRole("link", {
    name: "Projects",
  });
  await expect(projectsLinkLocator).toBeAttached();
  await projectsLinkLocator.click();
  await expect(page).toHaveURL("/projects");
  await expect(page.getByRole("heading", { name: "Projects" })).toContainText(
    "Projects",
  );
});
