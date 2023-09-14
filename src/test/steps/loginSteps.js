const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require("@playwright/test")
const { expect } = require('chai');
const { MainPage } = require('../../../pageObject/mainPage');
const { LoginPage } = require('../../../pageObject/loginPage');

let browser;
let context;
let page;
let mainPage;
let loginPage;

Given('User navigates to the application', { timeout: 60 * 1000 }, async function () {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto("https://evernote.com/");
});

Given('User accepts cookies', async function () {
  mainPage = new MainPage(page);
  await mainPage.cookieButton.click();
});

When('User click on the login link', async function () {
  await mainPage.loginLink.click(); 
});

Then('User navigates to the login page', async function () {
  await expect(page.url()).to.be.equal("https://www.evernote.com/Login.action");
});

Given('User enter the username as {string}', async function (username) {
  loginPage = new LoginPage(page);
  await loginPage.username.fill(username, { delay: 300 });
});

Given('User click on the login button', async function () {
  await loginPage.loginButton.click();
});


Given('User enter the password as {string}', async function (password) {
  await loginPage.password.fill(password, { delay: 300 });
});

When('User press on the login button', async function () {
  await loginPage.loginButton.click();
});

Then('User receives title as {string}',  async function (title) {
  await page.waitForSelector("#qa-CREATE_NOTE", { state: 'visible', timeout: 1000000 });


  //expect(await page.title({ timeout: 3000000 })).to.be.equal(title);

  // await page.close();
  // await browser.close();
});
