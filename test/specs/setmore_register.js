const RegisterPage = require('../pageobjects/register.page');


describe('My Register application', () => {
    it('should register with valid credentials', async() => {
        await browser.url("");
        await RegisterPage.register('Test','testzs@setmore.com',1234567890,'pass1234');
        await browser.pause(5000);
    })
})