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

setDefaultTimeout(90000);

Before(async function () {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
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
  expect(await page.url()).to.be.equal("https://www.evernote.com/Login.action");
});

Given('User login successfully', async function () {
  loginPage = new LoginPage(page);
  await loginPage.login("tt4999241@gmail.com","test@1000");
});

Then('User is on the Home page', async () => {
  homePage = new HomePage(page);
  expect(await homePage.userNav).to.exist;
});

When('User create new Note', async () => {
  setDefaultTimeout(90000);
  await homePage.createNote("This is a test note.","Test Note");
});

When('User logout', async () => {
  await homePage.logout();
});

When('User choose an existing note', async () => {
  await homePage.chooseNote();
});

Then('Note title should match previously created note', async () => {
  expect(await homePage.noteNameText).to.be.equal("Test Note");
});

Then('User should be on login page', async () => {
  expect(await loginPage.switchLink).to.exist;
});