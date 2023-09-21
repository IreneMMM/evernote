const { BasePage } = require ('./basePage')

class MainPage extends BasePage {

    constructor(page) {
        super(page);
        this.cookieButton = page.locator("button.rounded-sm");
        this.loginLink = page.locator("//a[@href='https://www.evernote.com/Login.action']").first();
    }
};


module.exports = { MainPage };
