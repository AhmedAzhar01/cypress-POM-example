export class studentregistrationform{



    setfame(fName){
        cy.get('#firstName').type('Ahmed')
    }
    setlname(lName){
        cy.get('#lastName').type('Azhar')
    }
    setemail(Email){
        cy.get('#userEmail').type('ahmed@gmail.com')
    }
    setgender(){
        cy.get("label[for='gender-radio-1']").click()
    }
    setmobile(Mobile){
        cy.get('#userNumber').type('02569587458')
    }
    setDOB(Dateofbirth){
        cy.get('#dateOfBirthInput').click()
        cy.get("div[aria-label='Choose Thursday, October 24th, 2024']").click()
    }
    setsubject(Subject){
        cy.get('.subjects-auto-complete__value-container.subjects-auto-complete__value-container--is-multi.css-1hwfws3').type('Automation step by step')
    }
    sethobbies(){
        cy.get("label[for='hobbies-checkbox-3']").click()
    }
    setpicture(Picture){
        cy.get('#uploadPicture').selectFile('C:/Users/Datics/Downloads/sampleFile (2).jpeg')
    }
    setcurrentaddress(Currentaddress){
        cy.get('#currentAddress').type('DHA phase 1')
    }
    setstateofcity(Sateofcity){
        cy.get('#state').click();
        cy.contains(Sateofcity).click();

    }
    setSOC(stateofcity){
        cy.get('#city').click();
        cy.contains(stateofcity).click();
    }

    setsubmit(){
        cy.get('#submit').click()
    }
}