import { test, expect } from "@playwright/test";

test("Footer is on the index page", async ({ page }) => {
  await page.goto("/"); // change this to your web app's URL

  // Get the current year
  const currentYear = new Date().getFullYear();

  // Check if the footer's text content is in the DOM
  const footer = await page.textContent("footer");
  expect(footer).toContain(`© ${currentYear} Bl4ko. Copy as much as you want.`);
});
