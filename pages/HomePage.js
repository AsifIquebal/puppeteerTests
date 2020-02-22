class HomePage {
    constructor(page) {
        this.page = page;
    }
    async getTitle() {
        return page.title();
    }
    async clickSignIn(page) {
        await page.click('#header > div.nav > div > div > nav > div.header_user_info > a');
        await page.waitForNavigation({waitUntil: 'networkidle0',});
    }
}
module.exports = HomePage;