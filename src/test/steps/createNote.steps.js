const dotenv = require('dotenv');
dotenv.config();

const { Given, When, Then, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require("@playwright/test")
const { expect } = require('chai');
const { LoginPage, HomePage } = require('../../../pageObject/index');
const { generateRandomString } = require('../../../utils/util')

let browser;
let page;
let loginPage, homePage;
const noteTitle = generateRandomString();


Before(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
});

After(async function () {
  await browser.close();
});

Given('User navigates to login page', async () => {
  loginPage = new LoginPage(page);
  await loginPage.navigate();
  expect(await page.url()).to.be.equal(process.env.LOGIN_URL);
});

When('User logins successfully', async function () {
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
  const textActual = await textLocator.textContent();
  expect(await textActual).to.eql(noteTitle);
});

Then('User should see login page', async () => {
  expect(await loginPage.switchLink).to.exist;
});
