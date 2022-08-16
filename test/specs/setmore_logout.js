const LoginPage = require('../pageobjects/login.page');
const LogoutPage = require('../pageobjects/logout.page');



describe('My Logout application', async() => {
    it('should logout from setmore', async () => {
        await browser.url("");
        await LoginPage.login('athirasathya14@setmore.com', 'vrindavan14');
        await browser.pause(20000);
        await LogoutPage.logout();

    })
})