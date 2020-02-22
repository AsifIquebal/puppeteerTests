class LoginPage {
    constructor(page) {
        this.page = page;
    }
    async enterEmail(page, email) {
        await page.type('input[id=email]', email);
    }
    async enterPassWord(page, password) {
        await page.type('input[id=passwd]', password);
    }
    async clickOnSignInButton(page) {
        await page.click('#SubmitLogin > span');
        await page.waitForNavigation({waitUntil: 'networkidle0',});
    }
    async getTitle(page) {
        return page.title();
    }
}
module.exports = LoginPage;