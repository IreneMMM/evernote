const { expect } = require('@playwright/test');

exports.MainPage = class MainPage {

    constructor(page) {
        this.page = page;
        this.adminButton = page.getByText("Войти как администратор");
        this.adminNotice = page.locator(".MuiTypography-root span").first().textContent()
        this.surname = page.locator("#TextInputField-1")
        this.name = page.locator("#TextInputField-2")
        this.middleName = page.locator("#TextInputField-3")
        this.phone = page.locator("#TextInputField-4")
        this.passport = page.locator("#TextInputField-5")
        this.dateOfBirth = page.locator("#TextInputField-6")
        this.nextButton = page.getByText("Далее");
        this.refreshButton = page.getByText("Обновить").textContent();
    }

    async enterAsAdmin() {
        await this.adminButton.click();
    }

    async fillAdminForm() {
        await this.surname.type("Ivanov");
        await this.name.type("Ivan");
        await this.middleName.type("Ivanovich");
        await this.phone.type("375291234567");
        await this.passport.type("HB1234567");
        await this.dateOfBirth.type("1991-01-10");
    }
 };