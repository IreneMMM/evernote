const { expect } = require('@playwright/test');
const { timeout } = require('../playwright.config');

exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        this.createNoteButton = page.locator('//div[contains(@id,"qa-HOME_WIDGET_CONTROL_Notes_2|0_0|0_C27R04|13")]//button');
        this.createNoteLink = page.locator('button.gFTtUgofaZevRPuVgjwI').first();
        this.userNav = page.locator("#qa-NAV_USER");
        this.frame = page.frameLocator('#qa-COMMON_EDITOR_IFRAME');
        this.noteBody = page.frameLocator('#qa-COMMON_EDITOR_IFRAME').locator("#en-note");
        this.noteTitle = page.frameLocator('#qa-COMMON_EDITOR_IFRAME').locator("textarea.dSbRl");
        this.userMenu = page.locator("#qa-USER_PORTRAIT").first();
        this.logoutLink = page.locator("#qa-ACCOUNT_DROPDOWN_LOGOUT");
        // этот локатор падает
        this.allNotesButton = page.locator('//button[contains(@id, "qa-HOME_WIDGET_HEADER_Notes")]');
        this.lastNote = page.locator("//button[contains(@id, 'qa-NOTES_SIDEBAR_NOTE')]").first();
    }

    async createNote(text, title) {
        await this.createNoteButton.click({timeout: 150000});
        await this.noteBody.fill(text);
        await this.noteTitle.fill(title);
    }

    async logout() {
        await this.userMenu.click();
        await this.logoutLink.click();
    }

    async chooseNote() {
        await this.allNotesButton.click({timeout: 150000});
        await this.lastNote.click();
    }

    async getTextFromNoteName() {
        return await this.page.frameLocator('#qa-COMMON_EDITOR_IFRAME').locator("textarea.dSbRl").textContent();
    }
};
