const Page = require('./page');


class StaffPage extends Page {
    get settings(){

        return $ ('.settings-icon');
    }
    get staffs()
    {
        return $('//*[@id="settingsSideNav"]/ul/li[2]/a');
    }
    
    get plus() {
        return $('#newPlusIcon');
    }
     
    get empname(){
        return $('#staffNewName');
    }

    get empemail()
    {
        return $('#staffNewEmail');
    }
    
     get addstaffs () {
        return $('#addstaff');
    }

    async staff(sname,smail) {
        
        await this.settings.waitForClickable();
        await this.settings.click();
        await this.staffs.click();
        await this.plus.click();
        await this.empname.setValue(sname);
        await this.empemail.setValue(smail);
        await this.addstaffs.waitForClickable();
        await this.addstaffs.click();
        }

    
     open () {
        return super.open('staff');
    }
}

module.exports = new StaffPage();