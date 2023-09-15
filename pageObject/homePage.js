const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        this.createNoteButton = page.locator("#qa-CREATE_NOTE");
        this.createNoteLink = page.locator('button.gFTtUgofaZevRPuVgjwI').first();
        this.userNav = page.locator("#qa-NAV_USER");
        this.frame = page.frameLocator('#qa-COMMON_EDITOR_IFRAME');
        this.noteName = page.frameLocator('#qa-COMMON_EDITOR_IFRAME').locator("#en-note");
        this.noteNameText = page.frameLocator('#qa-COMMON_EDITOR_IFRAME').locator("#en-note").textContent();
        this.userMenu = page.locator("#qa-USER_PORTRAIT").first();
        this.logoutLink = page.locator("#qa-ACCOUNT_DROPDOWN_LOGOUT");
        this.allNotesButton = page.locator('#qa-NAV_ALL_NOTES');
        this.lastNote = page.locator("//button[contains(@id, 'qa-NOTES_SIDEBAR_NOTE')]").first();
    }

    async createNote(text, title) {
        await this.createNoteButton.waitFor("visible");
        await this.createNoteButton.click();
        await this.createNoteLink.click();
        await this.frame.locator("#en-note").fill(text);
        await this.frame.locator("textarea.dSbRl").fill(title);
    }

    async logout() {
        await this.userMenu.click();
        await this.logoutLink.click();
    }

    async chooseNote() {
        await this.allNotesButton.click();
        await this.lastNote.click();
    }
 };
