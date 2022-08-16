const LoginPage = require('../pageobjects/login.page');
const StaffPage = require('../pageobjects/addstaff.page');
describe('My staff registration', () => {
    it('should add staff with valid credentials', async () => {
        await browser.url('');
        await LoginPage.login('athirasathya14@setmore.com','vrindavan14');
        await browser.pause(5000);
        await StaffPage.staff('STAFF1','parvathy@setmore.com');
        
    })
})