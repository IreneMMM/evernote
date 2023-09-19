const { defineConfig, devices } = require('@playwright/test');
const dotenv = require('dotenv');
dotenv.config();

module.exports = defineConfig( {
  timeout: 60000,
  testDir: './src/test/steps',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["list"], ["html"], ['allure-playwright']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    viewport: { width: 1920, height: 1440 },      
    video: 'on-first-retry',
    baseURL: 'https://evernote.com/',
    actionTimeout: 10 * 10000, 
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
    launchOptions: {slowMo: 500, },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
  ],
});
