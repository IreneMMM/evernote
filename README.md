<h1 align="center">
Playwright with CucumberJS test automation framework  for Evernote</h1>

## Description 

This is an automated testing framework for the Evernote web application (https://www.evernote.com/). It uses Playwright, Cucumber and JavaScript to test core functionality like login, creating notes, and verifying notes.

The framework is designed for:

  - End-to-end testing of real user workflows
  - Readable BDD-style tests with Cucumber
  - Page object pattern for abstraction


## Install all dependencies including:

  Playwright
  * To install Playwright : `npm install playwright --save-dev`

  Cucumber
  * To install Cucumber   : `npm install cucumber --save-dev`

  Cucumber-Playwright
  * To install Cucumber   : `npm install cucumber-playwright --save-dev`

  Chai
  * To install Chai : `npm install chai --save-dev`

  Dotenv
  * To install Dotenv : `npm install dotenv --save-dev`


## Framework Structure
  * playwright.config.js - Playwright config
  * cucumber.json - Cucumber config file
  * src/features/ - Cucumber feature files
  * src/steps/ - Step definitions for Cucumber
  * pageObject/ - Page objects using the Page Object Model
  * utils/ - Utility functions 
  * .env - constants for the test environment
  *  package.json - dependencies and scripts


## Run tests
```sh
npm run test
```

## View the HTML report:


## Author

👤 **Irina Menshova**

* Github: [@IreneMMM](https://github.com/IreneMMM)
