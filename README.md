<h1 align="center">
Playwright with CucumberJS test automation framework  for Evernote</h1>

## Description 

This is an automated testing framework for the Evernote web application (https://www.evernote.com/). It uses Playwright, Cucumber and JavaScript to test core functionality like login, creating notes, and verifying notes.

The framework is designed for:

  - End-to-end testing of real user workflows
  - Readable BDD-style tests with Cucumber
  - Page object pattern for abstraction

## Project setup:

  # Precondition: 

    Node JS should be installed.

  # Installation:

    Playwright
  * To install Playwright: `npm install playwright --save-dev`
    Cucumber
  * To install Cucumber: `npm install cucumber --save-dev`
    Cucumber-Playwright
  * To install Cucumber: `npm install cucumber-playwright --save-dev`
    Chai
  * To install Chai: `npm install chai --save-dev`
    Dotenv
  * To install Dotenv: `npm install dotenv --save-dev`


## Framework Structure

  * cucumber.json - Cucumber config file
  * setup/hooks.js - Cucumber hooks file
  * src/features/ - Cucumber feature files
      ** createNote.feature - Feature file for creating notes
      ** login.feature - Feature file for logging in to Evernote
  * src/steps/ - Step definitions for Cucumber
      ** createNote.steps.js - Steps for creating notes
      ** login.steps.js - Steps for logging in to Evernote
  * pageObject/ - Page objects using the Page Object Model
      ** basePage.js - Base page object
      ** loginPage.js - Login page object
      ** homePage.js - Home page object
      ** mainPage.js - Main page object
      ** index.js - common file for all page objects
  * utils/util.js - Utility functions (function for string generation)
  * .env - constants for the test environment
      ** BASE_URL and LOGIN_URL for application 
      ** DEFAULT_TIMEOUT - waiting time for page elements
      ** BROWSER_TYPE - browser type for testing
      ** USER_LOGIN and USER_PASSWORD/USER_PASSWORD_INVALID (credentials for logging in to Evernote)
      ** NOTE_TEXT - text for creating note's body
  *  package.json - dependencies and scripts for the framework

## Run tests
```sh
npm run test
```

## View the HTML report:


## Author

👤 **Irina Menshova**

* Github: [@IreneMMM](https://github.com/IreneMMM)
