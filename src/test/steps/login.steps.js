const dotenv = require('dotenv');
dotenv.config();

const { Given, When, Then, Before, After, Status } = require('@cucumber/cucumber');
const playwright = require("@playwright/test");
const { expect } = require('chai');
const { MainPage, LoginPage, HomePage } = require('../../../pageObject/index');


let browser;
let page;
let mainPage, loginPage, homePage;


Before(async function () {
  const isHeadless = process.env.HEADLESS !== 'false';
  browser = await playwright['chromium'].launch({ headless: isHeadless });
  context = await browser.newContext();
  page = await context.newPage();
});

After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    const screenshot = await page.screenshot({
      path: `reports/screenshots/failed-scenario-${scenario.pickle.name}.png`,
    });
  }
  await browser.close();
});

Given('User navigates to application', async function () {
  mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.cookieButton.click();
});

When('User clicks on login link', async function () {
  await mainPage.loginLink.click();
});

Then('User should be on login page', async function () {
  loginPage = new LoginPage(page);
  expect(await page.url()).to.be.equal(loginPage.url);
});

When('User logs in with valid credentials', async function () {
  await loginPage.login(process.env.USER_LOGIN, process.env.USER_PASSWORD);
});

When('User logs in with invalid credentials', async function () {
  await loginPage.login(process.env.USER_LOGIN, process.env.USER_PASSWORD_INVALID)
});

Then('User should be logged in successfully', async function () {
  homePage = new HomePage(page);
  expect(await homePage.userMenu).to.exist;
});

Then('User should receive error message', async function () {
  expect(await loginPage.errorMessage).to.exist;
});
