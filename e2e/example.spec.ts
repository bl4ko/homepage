import { test, expect } from '@playwright/test';
 
test('Should navigate to projects page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/');
  // Find an element with the text '404 Page' and click on it
  await page.click('text=Projects');
  // The new URL should be "/404" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/projects');
  // The new page should contain an h1 with "404 Page"
  await expect(page.locator('h1')).toContainText('Projects');
});