export class buttons{

    doubleclick = '#doubleClickBtn';
    rightclick = '#rightClickBtn';
    // clickme = 'button' , 'Click Me';


    setdoubleclick(){
        cy.get(this.doubleclick).dblclick({ multiple: false })
    }

    setrightclick(){
        cy.get(this.rightclick).rightclick({ multiple: false })
    }

    setclickme(){
    cy.get('.mt-4').eq(3).children().click()    

    }



}