import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  use: {
    headless: false,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "https://reqres.in/api",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "first",
      testMatch: "tests/test-login.spec.ts",
    },

    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
      //dependencies: ["test"],
      // testMatch: "tests/*.spec.ts",
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
      //dependencies: ["first"],
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
