const {
    expect
} = require('@playwright/test');

exports.MainPage = class MainPage {

    constructor(page) {
        this.page = page;
        this.cookieButton = page.locator("button.rounded-sm");
        this.loginLink = page.locator("//a[@href='https://www.evernote.com/Login.action']").first();
    }

    async navigate() {
        return await this.page.goto('https://www.evernote.com');
    }
};
