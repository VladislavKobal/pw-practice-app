import { test, expect } from "@playwright/test";
import { UploadPage } from "../page-object/fileUpload";
import { someFilePath } from "../page-object/helperBase";

test("Upload File", async ({ page }) => {
  const uploadPage = new UploadPage(page);
  //
  await uploadPage.navigateToUploadFile();
  //
  await uploadPage.uploadFile(someFilePath.filePath);//tatvtologia -_-
  //
  await uploadPage.uploadFileButton();
  //Check if file was uploaded
  await expect(page.getByText("Gifts")).toBeVisible();
});
