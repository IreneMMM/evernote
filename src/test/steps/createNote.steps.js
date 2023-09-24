const dotenv = require("dotenv");
dotenv.config();

const {
  Given,
  When,
  Then,
  Before,
  After,
  Status,
} = require("@cucumber/cucumber");
const playwright = require("@playwright/test");
const { expect } = require("chai");
const { LoginPage, HomePage } = require("../../../pageObject/index");
const { generateRandomString } = require("../../../utils/util");

let browser;
let page;
let loginPage, homePage;
const noteTitle = generateRandomString();

Before(async function () {
  const isHeadless = process.env.HEADLESS !== "false";
  browser = await playwright["chromium"].launch({ headless: isHeadless });
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

Given("User navigates to login page", async () => {
  loginPage = new LoginPage(page);
  await loginPage.navigate();
  expect(await page.url()).to.be.equal(loginPage.url);
});

When("User logins successfully", async function () {
  await loginPage.login(process.env.USER_LOGIN, process.env.USER_PASSWORD);
});

Then("User should be on home page", async () => {
  homePage = new HomePage(page);
  expect(await homePage.userMenu).to.exist;
});

When("User creates new note {string}", async (note_text) => {
  await homePage.createNote(note_text, noteTitle);
});

When("User logouts", async () => {
  await homePage.logout();
});

When("User chooses existing note", async () => {
  await homePage.chooseNote();
});

Then("Note title should match previously created note", async () => {
  const textLocator = await page
    .frameLocator("#qa-COMMON_EDITOR_IFRAME")
    .locator(`//div[text()="${noteTitle}"]`);
  const textActual = await textLocator.textContent();
  expect(await textActual).to.eql(noteTitle);
});

Then("User should see login page", async () => {
  expect(await loginPage.switchLink).to.exist;
});
