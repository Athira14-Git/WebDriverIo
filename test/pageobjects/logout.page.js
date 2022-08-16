const Page = require('./page');


class LogoutPage extends Page {
    get account()
    {
        return $('//*[@id="account_menu"]/a/i[1]');
    }
    
    get signout() {
        return $('//*[@id="sign_out"]/a/div[2]');
    }
    async logout() {
        await this.account.click();
        await this.signout.click();
    }
    open () {
        return super.open('logout');
    }
}

module.exports = new LogoutPage();
