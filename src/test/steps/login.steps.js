const dotenv = require('dotenv');
dotenv.config();

const { Given, When, Then, setDefaultTimeout, Before, After } = require('@cucumber/cucumber');
const { chromium, playwright } = require("@playwright/test")
const { expect } = require('chai');
const { MainPage, LoginPage, HomePage } = require('../../../pageObject/index');

let browser;
let page;
let mainPage, loginPage, homePage;


Before(async function () {
  const isHeadless = process.env.HEADLESS !== 'true';
  browser = await playwright[process.env.BROWSER_TYPE].launch({ headless: isHeadless });
  page = await browser.newPage();
});

After(async function () {
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
  expect(await page.url()).to.be.equal(process.env.LOGIN_URL);
});

When('User logs in with valid credentials', async function () {
  loginPage = new LoginPage(page);
  await loginPage.login(process.env.USER_LOGIN, process.env.USER_PASSWORD);
});

When('User logs in with invalid credentials', async function () {
  loginPage = new LoginPage(page);
  await loginPage.login(process.env.USER_LOGIN, process.env.USER_PASSWORD_INVALID)
});

Then('User should be logged in successfully', async function () {
  homePage = new HomePage(page);
  expect(await homePage.userNav).to.exist;
});

Then('User should receive error message', async function () {
  expect(await loginPage.errorMessage).to.exist;
});
