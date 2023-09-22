const { BasePage } = require ('./basePage')

class LoginPage extends BasePage {
    
    static LOGIN_PAGE_URL = "https://www.evernote.com/Login.action";

    constructor(page) {
        super(page);
        this.usernameInput = page.locator("#username");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.locator("#loginButton");
        this.switchLink = page.locator("#switch-link");
        this.errorMessage = page.locator("//input//following-sibling::div[contains(@class,'error-status')]");
    }

    async navigate() {
        console.log("Navigate to login page")
        return await this.page.goto(process.env.LOGIN_URL);
    }

    async login(username, password) {
        console.log(`Enter username`)
        await this.usernameInput.fill(username);
        console.log("Click on login button ")
        await this.loginButton.click();
        console.log(`Enter password`)
        await this.passwordInput.fill(password);
        console.log("Click on login button ")
        await this.loginButton.click();
    }
 };

module.exports = { LoginPage };
