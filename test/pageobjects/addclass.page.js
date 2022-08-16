const Page = require('./page');


class ClsPage extends Page {
    

    get setngs()
    {
        return $('.settings-icon');
    }
    get classes()
    {
        return $('//*[@id="settingsSideNav"]/ul/li[5]/a/span');
    }
    
    get newclass()
     {
        return $('#addNewClass');
    }
     
    get classname()
    {
        return $('#class_title');
    }
    get classdesc()
    {
        return $('#class_desc');
    }

    get classcost()
    {
        return $('#class_cost');
    }
    get classdur (){
        return $('#class_duration')
    }
    get slot(){
        return $('#class_slots');
    }
    
     get addclss () {
        return $('#saveNewClass');
    }

    async addclasss(clsname,clsdes,clscst,clstime) {
        await this.setngs.click();
        await this.classes.click();
        await this.newclass.click();
        await this.classname.setValue(clsname);
        await this.classdesc.setValue(clsdes);
        await this.classcost.setValue(clscst);
        await this.classdur.setValue(clstime);
        await this.slot.setValue();
        await this.addclss.waitForClickable();
        await this.addclss.click();
        }

    
     open () {
        return super.open('addclasss');
    }
}

module.exports = new ClsPage();