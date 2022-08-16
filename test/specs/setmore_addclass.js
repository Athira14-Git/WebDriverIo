const LoginPage = require('../pageobjects/login.page');
const ClsPage = require('../pageobjects/addclass.page');



describe('My classes', () => {
    it('should add classes', async () => {
        await browser.url('');
        await LoginPage.login('athirasathya14@setmore.com', 'vrindavan14');
        await browser.pause(5000);
        await ClsPage.addclasss('Testsclass','Add class test',1000,30);
        
    })
})