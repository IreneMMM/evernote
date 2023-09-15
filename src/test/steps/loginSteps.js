const { Given, When, Then, setDefaultTimeout, Before, After } = require('@cucumber/cucumber');
const { chromium } = require("@playwright/test")
const { expect } = require('chai');
const { MainPage } = require('../../../pageObject/mainPage');
const { LoginPage } = require('../../../pageObject/loginPage');
const { HomePage } = require('../../../pageObject/homePage');

let browser;
let context;
let page;
let mainPage;
let loginPage;
let homePage;

setDefaultTimeout(600000);

Before(async function () {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
});

After(async function () {
  await browser.close();
});

Given('User Navigate to the application', async function () {
  mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.cookieButton.click();
});

When('User click on login link', async function () {
  await mainPage.loginLink.click(); 
});

Then('User Navigate to the login page', async function () {
  expect(await page.url()).to.be.equal("https://www.evernote.com/Login.action");
});

When('User logs in with valid credentials', async function () {
  loginPage = new LoginPage(page);
  await loginPage.login("tt4999241@gmail.com","test@1000");
});

When('User logs in with invalid credentials', async function () {
  loginPage = new LoginPage(page);
  await loginPage.login("tt4999241@gmail.com","1234")
});

Then('User should be logged in successfully',  async function () {
  homePage = new HomePage(page);
  expect(await homePage.userNav).to.exist;
});

Then('User should receive error message',  async function () {
  expect(await loginPage.errorMessage).to.exist;
});
