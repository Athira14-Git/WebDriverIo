const Page = require('./page');


class RegisterPage extends Page {
    get reg()
    {
        return $('//*[@id="signup-btn"]');
    }
    
    get uname() {
        return $('//*[@id="input-name"]');
    }
     
    get email(){
        return $('//*[@id="input-email"]');
    }

    get phno()
    {
        return $('//*[@id="phoneNo-req"]')
    }
    get password() {
        return $('//*[@id="input-password"]');
    }
     get signupButton() {
        return $("//button[@type='submit']")
    }

            async register(user,eid,phone,pwd) {
        await this.reg.click();
        await this.uname.setValue(user);
        await this.email.setValue(eid);
        await this.phno.setValue(phone);
        await this.password.setValue(pwd);
        await this.signupButton.waitForClickable()
        await this.signupButton.click()
        }

    
     open () {
        return super.open('register');
    }
}

module.exports = new RegisterPage();
