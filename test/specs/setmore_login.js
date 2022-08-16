const LoginPage = require('../pageobjects/login.page');


describe('My application login', async() => {
    it('Setmore should login with valid credentials', async () => {
        await browser.url("");
        await LoginPage.login('athirasathya14@setmore.com', 'vrindavan14');
        await browser.pause(20000);

    })
})

