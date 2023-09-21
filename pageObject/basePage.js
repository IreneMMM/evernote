class BasePage {

    constructor(page) {
        this.page = page;
    }

    async navigate() {
        return await this.page.goto(process.env.BASE_URL);
    }
};

module.exports = { BasePage };
