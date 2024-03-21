import { test } from "@playwright/test";

import { PageManager } from "../page-object/pageManager";

test("simple action", async ({ page }) => {
  const pm = new PageManager(page);
  const loginpage = pm.onLoginPage();
  await pm.onLoginPage().navigateToOrangeHM();
  await pm.onLoginPage().fillDataIntoTheField("Admin", "admin123");
  await pm.onLoginPage().actionClickOnButton();
});

