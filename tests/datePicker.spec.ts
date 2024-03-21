import { Page, test, expect } from "@playwright/test";
import { DatepickerPage } from "../page-object/datepickerPage";

test("DatePicker test", async ({ page }) => {
  const selectDatePicker = new DatepickerPage(page);
  await selectDatePicker.navigateToPageWithDatePicker();
  await selectDatePicker.selectDatePickerDesktopVariant();
  await page.pause();
});
