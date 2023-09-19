const { defineConfig } = require('@playwright/test');
const config = defineConfig(require('../playwright.config')); 
const { Given, When, Then, Before, After, setDefaultTimeout  } = require('@cucumber/cucumber');
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

// setDefaultTimeout(600000);

Before(async function () {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
  page.setDefaultTimeout(process.env.DEFAULT_TIMEOUT);
});

After(async function () {
  await browser.close();
});

Given('User Navigates to login page', async () => {
  mainPage = new MainPage(page);
  loginPage = new LoginPage(page);
  await mainPage.navigate();
  await mainPage.cookieButton.click();
  await mainPage.loginLink.click(); 
  expect(await page.url()).to.be.equal(process.env.LOGIN_URL);
});

Given('User login successfully', async function () {
  loginPage = new LoginPage(page);
  await loginPage.login(process.env.USER_LOGIN,process.env.USER_PASSWORD);
});

Then('User is on the Home page', async () => {
  homePage = new HomePage(page);
  expect(await homePage.userNav).to.exist;
});


When('User create new Note', async () => {  
  await homePage.createNote("This is a test note.","Test Note");
});

When('User logout', async () => {
  await homePage.logout();
});

When('User choose an existing note', async () => {
  await homePage.chooseNote();
});

Then('Note title should match previously created note', async () => {
  const firstResult = await page.frameLocator('#qa-COMMON_EDITOR_IFRAME').locator("//textarea[contains(@class,'dSbRl')]");
  const text = await firstResult.inputValue();
  expect(await text).to.eql("Test Note");
});

Then('User should be on login page', async () => {
  expect(await loginPage.switchLink).to.exist;
});
