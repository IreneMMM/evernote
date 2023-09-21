const { defineConfig, devices } = require('@playwright/test');
const dotenv = require('dotenv');
dotenv.config();

module.exports = defineConfig({
  timeout: process.env.DEFAULT_TIMEOUT,
  testDir: "./tests",
  fullyParallel: false,
  reporter: [["list"], ["html"], ['allure-playwright']],
  use: {
    retries: 1,
    video: 'on-first-retry',
    trace: 'on-first-retry',
    baseURL: process.env.BASE_URL,
    actionTimeout: 10 * 1000,
    ignoreHTTPSErrors: true,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: process.env.BROWSER_TYPE,
      use: {
        ...devices['Desktop Chrome']
      },
    },
  ],
});
