const Page = require('./page');


class DeleteStaffPage extends Page {
    get setings(){

        return $('.settings-icon');
    }
    get employes()
    {
        return $('//*[@id="settingsSideNav"]/ul/li[2]/a');
    }
    
     get delete () {
        return $('#btn-for-staffdelete');
    }
    get deletebutton(){
        return $('#delete-confirmation-btn')
    }
    


    async staffdelete() {
        await this.setings.click();
        await this.employes.click();
        await this.delete.click();
       await this.deletebutton.click();
       
        
        }

    
     open () {
        return super.open('staffdelete');
    }
}

module.exports = new DeleteStaffPage();