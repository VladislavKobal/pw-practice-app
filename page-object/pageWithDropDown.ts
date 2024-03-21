import { Locator, Page } from "@playwright/test";

export class DropDown {
  private readonly page: Page;
  private readonly clickOnPIM: Locator;
  private readonly clickOnDropDown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.clickOnPIM = page.getByRole("link", { name: "PIM" });
    this.clickOnDropDown = page.locator(
      "(//div[@class='oxd-select-text--after']//i)[3]"
    );
  }

  async clickOnPagePIM() {
    await this.clickOnPIM.click();
  }
  async clickDropDown() {
    await this.clickOnDropDown.click();
  }
  async selectOptionFromDropDown() {

    const option =  this.page.locator('.dropdown > div:nth-child(6)');
    for (let op of option) {
      const jobTitle = await op.textContent();

      if (jobTitle?.includes("QA Enginner")) {
        await op.click();
      }
    }
  }
}
