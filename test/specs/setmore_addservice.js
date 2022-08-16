const LoginPage = require('../pageobjects/login.page');
const ServicePage = require('../pageobjects/addservice.page');

describe('My service registration', () => {
    it('should register services', async () => {
        await browser.url('');
        await LoginPage.login('athirasathya14@setmore.com', 'vrindavan14');
        await browser.pause(5000);
        await ServicePage.service('PrivateVideoService','Its a private service with video meet meet',1000,30);
        
    })
})