const { setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(Number(process.env.DEFAULT_TIMEOUT));