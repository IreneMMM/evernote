const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.loginButton = page.locator("#loginButton");
    }
 };
