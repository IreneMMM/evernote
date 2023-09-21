const { defineConfig } = require('@playwright/test');
const config = defineConfig(require('../../../playwright.config'));

const dotenv = require('dotenv');
dotenv.config();

const { Given, When, Then, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require("@playwright/test")
const { expect } = require('chai');
const { MainPage, LoginPage, HomePage } = require('../../../pageObject/index');
const { generateRandomString } = require('../../../utils/util')


let browser;
let page;
let mainPage, loginPage, homePage;
const noteTitle = generateRandomString();


setDefaultTimeout(process.env.DEFAULT_TIMEOUT);

Before(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
});

After(async function () {
  await browser.close();
});

Given('User navigates to login page', async () => {
  mainPage = new MainPage(page);
  loginPage = new LoginPage(page);
  await mainPage.navigate();
  await mainPage.cookieButton.click();
  await mainPage.loginLink.click();
  expect(await page.url()).to.be.equal(process.env.LOGIN_URL);
});

When('User logins successfully', async function () {
  loginPage = new LoginPage(page);
  await loginPage.login(process.env.USER_LOGIN, process.env.USER_PASSWORD);
});

Then('User is on home page', async () => {
  homePage = new HomePage(page);
  expect(await homePage.userNav).to.exist;
});

When('User creates new note', async () => {
  await homePage.createNote(process.env.NOTE_TEXT, noteTitle);
});

When('User logouts', async () => {
  await homePage.logout();
});

When('User chooses existing note', async () => {
  await homePage.chooseNote();
});

Then('Note title should match previously created note', async () => {
  const textLocator = await page.frameLocator('#qa-COMMON_EDITOR_IFRAME').locator(`//div[text()="${noteTitle}"]`);
  const textActual = await textLocator.textContent({timeout: 80000});
  expect(await textActual).to.eql(noteTitle);
});

Then('User should see login page', async () => {
  expect(await loginPage.switchLink).to.exist;
});
