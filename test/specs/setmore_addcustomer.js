const LoginPage = require('../pageobjects/login.page');
const CustomerPage = require('../pageobjects/addcustomer.page');


describe('My Customer registration', () => {
    it('should register with valid credentials', async () => {
        await browser.url('');
        await LoginPage.login('athirasathya14@setmore.com', 'vrindavan14');
        await browser.pause(5000);
        await CustomerPage.customer('Customer1',"customer1@setmore.com");
    
    })
})