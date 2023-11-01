import { test, expect } from "@playwright/test";
import {
  cursorBorderW,
  cursorColors,
  cursorSizeS,
  cursorSizeL,
} from "../src/app/layout";

test("Custom cursor changes on mouse events", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState(); // Waits for 'load' state by default.

  // Get current theme
  const currentTheme = (await page.getAttribute("html", "data-theme")) as
    | "light"
    | "dark";
  expect(currentTheme === "light" || currentTheme === "dark").toBe(true);

  // Get the cursor
  const cursorSelector = await page.getByTestId("cursor");

  // Expect initial size of the cursor to be 10px
  await expect(cursorSelector).toHaveCSS("height", cursorSizeS);

  // Move the mouse to the (100, 100) location
  await page.mouse.move(100, 100);

  // Expect the cursor to have coordinates of (100, 100)
  await expect(cursorSelector).toHaveCSS("top", "100px");
  await expect(cursorSelector).toHaveCSS("left", "100px");

  // Find a link and hover over it
  await page.hover("a");

  // Ensure that the cursor size increases on the hover and the fill is transparent
  await expect(cursorSelector).toHaveCSS("height", "40px");
  await expect(cursorSelector).toHaveCSS(
    "background",
    "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
  );

  // Also hover random entry in navbar (blog) and check that the cursor size increases
  await page.hover("a[href='/blog']");
  await expect(cursorSelector).toHaveCSS("height", "40px");
  await expect(cursorSelector).toHaveCSS(
    "background",
    "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
  );

  // // Move away from the link and ensure that the cursor size and fill return to initial values
  await page.mouse.move(10, 10);
  await expect(cursorSelector).toHaveCSS("height", "10px");
  await expect(cursorSelector).toHaveCSS(
    "background",
    cursorColors[currentTheme],
  );

  // // Check the cursor style after moving away from the link
  // const cursorAfterLink = await page.$eval(cursorSelector, (el) => ({
  //   size: el.style.height,
  //   background: el.style.background,
  // }));

  // // Verify that cursor size and fill return to initial values
  // expect(cursorAfterLink.size).toBe("10px");
  // // Replace 'light' or 'dark' with the actual value depending on the theme
  // expect(cursorAfterLink.background).toBe("rgba(0, 255, 173, 1)"); // or the appropriate color

  // // Simulate mouse down and up to check cursor fill
  // await page.mouse.down();
  // await page.mouse.up();

  // // Verify the cursor fill after mouse down and up
  // const cursorAfterClick = await page.$eval(
  //   cursorSelector,
  //   (el) => el.style.background,
  // );
  // expect(cursorAfterClick).toBe("transparent");
});
