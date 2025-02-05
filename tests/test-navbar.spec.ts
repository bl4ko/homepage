import { test, expect } from "@playwright/test";
import { projects } from "../src/constants";

test("Test index page", async ({ page }) => {
  await page.goto("/");
  await page.waitForURL("/");
  await page.goto("/projects");
  await page.getByRole("link", { name: "Home" }).click();
  await page.waitForSelector("canvas");
  const canvasElement = await page.$("canvas");
  expect(canvasElement).toBeTruthy();
  await expect(page.getByRole("heading", { name: "Bl4ko" })).toContainText(
    "Bl4ko",
  );
  await expect(page.getByRole("heading", { name: "About" })).toContainText(
    "About",
  );
  await page.getByRole("heading", { name: "Bio" });
  await page.getByRole("heading", { name: "Hobbies2341423" });
  await page.getByText("© 2023 Bl4ko. Copy as much as you want.");
});

test("Test projects page displays all projects, has canvas and has footer", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Projects" }).click();
  await page.getByRole("heading", { name: "Projects" });
  await page.waitForSelector(".playwright-card");
  const projectCards = await page.$$(".playwright-card");
  await expect(projectCards.length).toBe(projects.length);
  await expect(
    page.getByText("© 2024 Bl4ko. Copy as much as you want."),
  ).toBeTruthy();
});

test("Code link redirects to github", async ({ page }) => {
  await page.goto("/");
  const githubLinkLocator = await page.getByRole("link", { name: "Code" });
  const popupPromise = page.waitForEvent("popup");
  await githubLinkLocator.click();
  const newPage = await popupPromise;
  await expect(newPage).toHaveURL("https://github.com/bl4ko/homepage");
});

test("Test experience page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Experience" }).click();
  await page.getByRole("heading", { name: "Experience" });
  const linkLocator = await page.getByRole("link", { name: "@SRC D.O.O" });
  const popupPromise = page.waitForEvent("popup");
  await linkLocator.click();
  const newPage = await popupPromise;
  await expect(newPage).toHaveURL("https://www.src.si/");
});

// Test theme toggle button
test("Test theme toggle button", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  // Click the button
  await page.getByLabel("Toggle theme").click();
  // Check that the html[data-theme] attribute is set to light
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  // Click the button again
  await page.getByLabel("Toggle theme").click();
  // Check that the html[data-theme] attribute is set to dark
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});
