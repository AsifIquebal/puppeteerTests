const puppeteer = require('puppeteer');
const LoginPage = require('./pages/LoginPage');
var loginPage = new LoginPage();
const HomePage = require('./pages/HomePage');
var homePage = new HomePage();
(async () => {
  const browser = await puppeteer.launch({ ignoreHTTPSErrors: true, headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('http://automationpractice.com/index.php',{ waitUntil: 'networkidle2' });
    var output = await page.evaluate(() => {
      return;
    });
    await page.screenshot({ path: 'automationPractice.png' });
    // const title = await page.getTitle();
    // console.log(title);
    await homePage.clickSignIn(page);
    await page.screenshot({ path: 'automationPracticeLoginPage.png' });
    await loginPage.enterEmail(page, 'asu9421@gmail.com');
    await loginPage.enterPassWord(page,'aut555');
    await loginPage.clickOnSignInButton(page);
    await page.screenshot({ path: 'automationPracticeUserHomePage.png' });
  } catch (err) {
    console.error(err.message);
  } finally {
    page.close();
    await browser.close();
  }
})();