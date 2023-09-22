const reporter = require("cucumber-html-reporter");
var date = new Date();
var currentDate = date.getDate() + '_' + (date.getMonth()+1) + '_' + date.getFullYear() + '_' + date.getHours() + '_' + date.getMinutes() + '_' + date.getSeconds() + '_' + date.getMilliseconds();

const options = { 
    brandTitle: "test scenarios",
    theme: "bootstrap",
    jsonFile: "cucumber-reports/cucumber_report.json",
    output: "cucumber-reports/cucumber_report.html",
    screenshotsDirectory: "cucumber-reports/screenshots/",
    reportSuiteAsScenarios: true,
    launchreport: true,
    metadata: {
        browser: {
          name: "chrome",
          version: "60",
        },
        device: "Local test machine",
        platform: {
          name: "Windows 11"
        },
      }
};


reporter.generate(options);
