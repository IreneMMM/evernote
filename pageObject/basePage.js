class BasePage {

    constructor(page) {
        this.page = page;
    }

    async navigate() {
        console.log("Navigate to main page")
        await this.page.goto(process.env.BASE_URL);
    }
};

module.exports = { BasePage };
