const { BasePage } = require ('./basePage')

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        // Long locator is used to reduces test flakiness
        this.createNoteButton = page.locator('//div[contains(@id,"qa-HOME_WIDGET_CONTROL_Notes")]//button');
        this.userNav = page.locator("#qa-NAV_USER");
        this.frame = page.frameLocator('#qa-COMMON_EDITOR_IFRAME');
        this.noteBodyInput = page.frameLocator('#qa-COMMON_EDITOR_IFRAME').locator("#en-note");
        this.noteTitleInput = page.frameLocator('#qa-COMMON_EDITOR_IFRAME').locator("//textarea[contains(@class,'dSbRl')]");
        this.userMenu = page.locator("#qa-USER_PORTRAIT").first();
        this.logoutLink = page.locator("#qa-ACCOUNT_DROPDOWN_LOGOUT");
        this.allNotesButton = page.locator('//button[contains(@id, "qa-HOME_WIDGET_HEADER_Notes")]');
        //this.lastNote = page.locator("//button[contains(@id, 'qa-NOTES_SIDEBAR_NOTE')]").first();
       // this.lastNote = page.locator(`//span[text()="${text}"]`);
    }

    async createNote(text, title) {
        console.log("Click on create note button")
        await this.createNoteButton.click( {timeout: 80000});
        console.log("Enter note text")
        await this.noteBodyInput.fill(text);
        console.log("Enter note title")
        await this.noteTitleInput.fill(title);
    }

    async logout() {
        console.log("Click on user menu")
        await this.userMenu.click();
        console.log("Click on logout button")
        await this.logoutLink.click();
    }

    async chooseNote() {
        console.log("Click on allnotes button")
        await this.allNotesButton.click( {timeout: 80000});
        // console.log("Click on last note")
        // await this.lastNote.click();
    }
};

module.exports = { HomePage };
