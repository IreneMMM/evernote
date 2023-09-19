const { expect } = require('@playwright/test');
const { timeout } = require('../playwright.config');

exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        // Long locator is used to reduces test flakiness
        this.createNoteButton = page.locator('//div[@id="qa-HOME_WIDGET_CONTROL_Notes_2|0_0|0_C27R04|13"]//button');
        this.createNoteLink = page.locator('button.gFTtUgofaZevRPuVgjwI').first();
        this.userNav = page.locator("#qa-NAV_USER");
        this.frame = page.frameLocator('#qa-COMMON_EDITOR_IFRAME');
        this.noteBodyInput = page.frameLocator('#qa-COMMON_EDITOR_IFRAME').locator("#en-note");
        this.noteTitleInput = page.frameLocator('#qa-COMMON_EDITOR_IFRAME').locator("//textarea[contains(@class,'dSbRl')]");
        this.userMenu = page.locator("#qa-USER_PORTRAIT").first();
        this.logoutLink = page.locator("#qa-ACCOUNT_DROPDOWN_LOGOUT");
        this.allNotesButton = page.locator('//button[contains(@id, "qa-HOME_WIDGET_HEADER_Notes")]');
        this.lastNote = page.locator("//button[contains(@id, 'qa-NOTES_SIDEBAR_NOTE')]").first();
    }

    async createNote(text, title) {
        await this.createNoteButton.click({timeout: 150000});
        await this.noteBodyInput.fill(text);
        await this.noteTitleInput.fill(title);
    }

    async logout() {
        await this.userMenu.click();
        await this.logoutLink.click();
    }

    async chooseNote() {
        await this.allNotesButton.click({timeout: 150000});
        await this.lastNote.click();
    }
};
