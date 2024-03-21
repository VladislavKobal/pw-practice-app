import { Locator, Page } from "@playwright/test";

export class DatepickerPage {
  private readonly page: Page;
  private readonly clickOnDataPicker: Locator;
  private datePickerDesktopeVarian: Locator;
  private datePickerToDate: Locator;

  constructor(page: Page) {
    this.page = page;
  }
  async navigateToPageWithDatePicker() {
    await this.page.goto("https://mui.com/x/react-date-pickers/date-picker/");
  }

  async selectDatePickerDesktopVariant(): Promise<void> {
    await this.page
      .locator("div")
      .filter({ hasText: /^Basic date picker$/ })
      .getByLabel("Choose date")
      .click();
  }
  async selectDatePickerMobileVariant() {}
}
