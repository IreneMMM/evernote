import { test, expect } from "@playwright/test";
const { MainPage } = require('../pageObject/mainPage');


// test.beforeEach(async ({ request }) => {

//   await request.get("https://regoffice.senla.eu", {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization': 'Basic  dXNlcjpzZW5sYXRlc3Q='
//     }
//   })


// });

test("Open all applications as admin user", async ({ browser }) => {
  const context = await browser.newContext({
    httpCredentials: {
      username: "user",
      password: "senlatest"
    }
  })
  
  const page = await context.newPage();
  await page.goto('https://regoffice.senla.eu/');
  await expect(page).toHaveURL("https://regoffice.senla.eu/");

  const mainPage = new MainPage(page);
  await mainPage.enterAsAdmin();
  await mainPage.fillAdminForm();
  await mainPage.nextButton.click();
  expect(await mainPage.refreshButton).toEqual("Обновить");

});




