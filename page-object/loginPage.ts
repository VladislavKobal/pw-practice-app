import { Locator, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class LoginPage extends HelperBase {
  private readonly userNameInputField: Locator;
  private readonly passwordInputField: Locator;
  private readonly clickOnLoginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.userNameInputField = page.locator("input[name='username']");
    this.passwordInputField = page.locator("input[name='password']");
    this.clickOnLoginButton = page.locator("button[type='submit']");
  }

  async navigateToOrangeHM() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }

  async fillDataIntoTheField(userName: string, password: string) {
    await this.userNameInputField.click();
    await this.userNameInputField.fill(userName);
    await this.passwordInputField.click();
    await this.passwordInputField.fill(password);
  }
  async actionClickOnButton(): Promise<void> {
    await this.clickOnLoginButton.click();
  }
}
