const LoginPage = require('../pageobjects/login.page');
const DeleteStaffPage = require('../pageobjects/deletestaff.page');
describe('My staff Deletion', () => {
    it('should delete staff', async () => {
        await browser.url('/');
        await LoginPage.login('athirasathya14@setmore.com','vrindavan14');
       await browser.pause(5000);
        await DeleteStaffPage.staffdelete();
        await browser.pause(5000);
       
        
    })
})