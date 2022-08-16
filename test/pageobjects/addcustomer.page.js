const Page = require('./page');


class CustomerPage extends Page {
    get custmer()
    {
        return $('//*[@id="side-nav-customers"]');
    }
     get addcstmer()
     {
         return $('#newCustomer');
     }
    
   get custname() {
        return $('//*[@id="customerNewName"]');
    }
     
     get custemail(){
         return $('//*[@id="customerNewEmail"]');
    }
    
    get addcustmer()
      {
        return $('//*[@id="addnewCustomer"]');
    }
     
async customer(custmname,custmeid) {
        
        await this.custmer.click();
        await this.addcstmer.click();
        await this.custname.setValue(custmname);
        await this.custemail.setValue(custmeid);
        await this.addcustmer.click();
        }
        
     open () {
        return super.open('customer');
    }
}

module.exports = new CustomerPage();
