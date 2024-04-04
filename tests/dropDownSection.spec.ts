import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://mui.com/material-ui/react-select/");
  
  await page.locator("#demo-simple-select").click();
  await page.getByRole("option", { name: "Ten" }).click();

  await page.getByLabel("Ten", { exact: true }).click();

  await page.getByRole("option", { name: "Twenty" }).click();

  await page.getByLabel("Twenty").click();
  
  await page.getByRole("option", { name: "Thirty" }).click();
});
