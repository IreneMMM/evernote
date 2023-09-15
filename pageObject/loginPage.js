const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.loginButton = page.locator("#loginButton");
        this.switchLink = page.locator("#switch-link");
        this.errorMessage = page.locator("//input//following-sibling::div[contains(@class,'error-status')]");
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.loginButton.click();
        await this.password.fill(password);
        await this.loginButton.click();
    }
 };
