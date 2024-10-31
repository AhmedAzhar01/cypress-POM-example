export class TextBox {

    txtfullname = '#userName';
    txtemail = '#userEmail';
    txtcurrentaddress = '#currentAddress';
    txtpermanentaddress = '#permanentAddress';
    submit = '#submit';

    setfullname(fullname){
        cy.get(this.txtfullname).type(fullname)
       
    }
    setemail(email){
        cy.get(this.txtemail).type(email)
       
    }
    setCurrentAddress(CurrentAddress){
        cy.get(this.txtcurrentaddress).type(CurrentAddress)
       
    }
    setPermanentAddress(PermanentAddress){
        cy.get(this.txtpermanentaddress).type(PermanentAddress)
       
    }
    btnsubmit(){
        cy.get(this.submit).click()
       
    }
    
}
