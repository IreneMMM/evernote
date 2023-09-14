const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        this.createNoteButton = page.locator("#qa-CREATE_NOTE");

    }
 };
