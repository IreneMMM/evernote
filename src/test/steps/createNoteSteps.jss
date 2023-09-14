const { Given, When, Then } = require('@cucumber/cucumber');
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
    await loginPage.username.type(username);
  });
  
  Given('User click on the login button', async function () {
    await loginPage.loginButton.click();
  });
  
  
  Given('User enter the password as {string}', async function (password) {
    await loginPage.password.type(password);
  });


  Given('User press on the login button', async function () {
    await loginPage.loginButton.click();
  });

  Given('User click on the create button', async function () {
    await homePage.createNoteButton.click();
    
  });

  