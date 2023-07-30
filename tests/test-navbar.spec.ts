import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("heading", { name: "Bl4ko" }).click();
  await page.getByRole("link", { name: "Projects" }).click();
  await page.getByRole("heading", { name: "Projects" }).click();
  await page.getByRole("link", { name: "Experience" }).click();
  await page
    .getByRole("heading", { name: "Junior Cloud Engineer @SRC D.O.O" })
    .click();
  await page.getByRole("link", { name: "Technologies" }).click();
  await page.getByRole("article").getByText("Technologies").click();
  const page2Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Code" }).click();
  const page2 = await page2Promise;
  await page2.getByRole("link", { name: "homepage", exact: true }).click();
  await page.getByRole("link", { name: "Experience" }).click();
});
