import { Page, test, expect } from "@playwright/test";
import { LoginPage } from "../page-object/loginPage";
import { DropDown } from "../page-object/pageWithDropDown";

test.describe.configure({ mode: "serial" });

test.describe(() => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test("Login", async () => {
    const login = new LoginPage(page);
    await login.navigateToOrangeHM();
    await login.fillDataIntoTheField("Admin", "admin123");
    await login.actionClickOnButton();
    await page.getByLabel('Upload file').setInputFiles(path.join(__dirname, 'myfile.pdf'));
  });

  test("Hidden dropdown test", async () => {
    /* const actionWithDropDown = new DropDown(page);
    await actionWithDropDown.clickOnPagePIM();
    await actionWithDropDown.clickDropDown();
    await actionWithDropDown.selectOptionFromDropDown();
    await page.pause();*/
    await page.goto("https://semantic-ui.com/modules/dropdown.html");
    const list = await page
      .locator(".dropdown > div:nth-child(6)")
      .first()
      .click();
    await page
      .locator("div")
      .filter({ hasText: /^Male$/ })
      .first()
      .click();
  });
});
