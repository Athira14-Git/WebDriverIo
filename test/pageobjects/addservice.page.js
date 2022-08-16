const Page = require('./page');


class ServicePage extends Page {
    get settings()
    {
        return $('.settings-icon');
    }
    get servc()
    {
        return $('//*[@id="settingsSideNav"]/ul/li[3]/a/span');
    }
    
    get newservice()
     {
        return $('#addNewService');
    }
     
    get servicename()
    {
        return $('#service_ServiceName');
    }
    get servicedes()
    {
        return $('#service_description');
    }

    get servicecost()
    {
        return $('#service_Cost');
    }
    get servicetime (){
        return $('#service_Duration');
    }
    get pvttoggle(){
        return $('//*[@id="serviceDetails"]/ul[1]/li[2]/ul/li[4]/div/div/span[3]')
    }
    get videotoggle(){
        return $('//*[@id="serviceDetails"]/ul[1]/li[2]/ul/li[5]/div/div[1]/span[1]')
    }

    get stff(){
        return $('.selectall');
    }
    
     get addservice () {
        return $('#saveNewService');
    }

    async service(servname,servdes,servcost,servtim) {
        await this.settings.click();
        await this.servc.click();
        await this.newservice.click();
        await this.servicename.setValue(servname);
        await this.servicedes.setValue(servdes);
        await this.servicecost.setValue(servcost);
        await this.servicetime.setValue(servtim);
        await this.pvttoggle.click();
        await this.videotoggle.click();
        await this.stff.waitForClickable();
        await this.stff.click();
        await this.addservice.waitForClickable();
        await this.addservice.click();
        }

    
     open () {
        return super.open('service');
    }
}

module.exports = new ServicePage();