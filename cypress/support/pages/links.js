export class links{

    homelink = '#simpleLink';
    homet2vaX = '#dynamicLink'

    sethomelink(){
        cy.get(this.homelink).click()
    }

    sethomet2vaX(){
        cy.get(this.homet2vaX).click()
    }


}