import { Locator, Page } from "@playwright/test";

export class UploadPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async navigateToUploadFile() {
    await this.page.goto("https://the-internet.herokuapp.com/upload");
  }
  async uploadFile(filePath: string) {
    const fileInput = await this.page.locator("#file-upload");
    await fileInput.setInputFiles(filePath);
  }
  async getUploadFileName() {
    return await this.page.textContent("Gifts");
  }
  async uploadFileButton(){
    const uploadButton =   await this.page.locator("#file-submit");
    uploadButton.click();
  }
}
