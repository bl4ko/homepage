import { test, expect } from "@playwright/test";
import {
  cursorBorderW,
  cursorColors,
  cursorSizeS,
  cursorSizeL,
} from "@/components/Cursor";

function hexToRgb(hex: string): string {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16,
      )})`
    : "null";
}

test("Custom cursor moving correctly", async ({ page }) => {
  // Start at index
  await page.goto("/");

  // Add a little bit of delay after page load
  await page.waitForTimeout(500);

  // Get the cursor
  const cursorSelector = await page.getByTestId("cursor");

  // Ensure that cursor exists
  expect(cursorSelector).not.toBe(null);

  // Ensure that the cursor has correct border width, and height
  await expect(cursorSelector).toHaveCSS("border-width", cursorBorderW);
  await expect(cursorSelector).toHaveCSS("height", cursorSizeS);

  // Move the mouse to the (100, 100) location
  await page.mouse.move(100, 100);

  // Expect the cursor to have coordinates of (100, 100)
  await expect(cursorSelector).toHaveCSS("top", "100px");
  await expect(cursorSelector).toHaveCSS("left", "100px");
});

test("Custom cursor hover size change on link", async ({ page }) => {
  // Test at /projects
  await page.goto("/projects");

  // Add a little bit of delay
  await page.waitForTimeout(500);

  // Get current theme
  const currentTheme = (await page.getAttribute("html", "data-theme")) as
    | "light"
    | "dark";
  expect(currentTheme === "light" || currentTheme === "dark").toBe(true);
  // Get the cursor
  const cursorSelector = await page.getByTestId("cursor");

  // Ensure that the cursor has correct border width and height
  await expect(cursorSelector).toHaveCSS("border-width", cursorBorderW);
  await expect(cursorSelector).toHaveCSS("height", cursorSizeS);

  // Also hover random entry in navbar (blog) and check that the cursor size increases
  await page.getByRole("link", { name: "Projects" }).hover();
  await expect(cursorSelector).toHaveCSS("height", cursorSizeL);
  await expect(cursorSelector).toHaveCSS(
    "background-color",
    "rgba(0, 0, 0, 0)",
  );

  // Move away from the link and ensure that the cursor size and fill return to initial values
  await page.mouse.move(10, 10);
  await expect(cursorSelector).toHaveCSS("height", cursorSizeS);
  await expect(cursorSelector).toHaveCSS(
    "background-color",
    `${hexToRgb(cursorColors[currentTheme])}`,
  );
});

test("Custom cursor hover size change on <a>", async ({ page }) => {
  // Start at experience page
  await page.goto("/experience");

  // Get the cursor
  const cursorSelector = await page.getByTestId("cursor");

  // Ensure that the cursor has correct border width and color
  await expect(cursorSelector).toHaveCSS("border-width", cursorBorderW);

  // Expect initial size of the cursor to be 10px
  await expect(cursorSelector).toHaveCSS("height", cursorSizeS);

  // Find a link and hover over it
  // Find a link and hover over it
  await page.hover("a");

  // Ensure that the cursor size increases on the hover and the fill is transparent
  await expect(cursorSelector).toHaveCSS("height", cursorSizeL);
  await expect(cursorSelector).toHaveCSS(
    "background-color",
    "rgba(0, 0, 0, 0)",
  );
});
