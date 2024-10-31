export class Radiobutton{

    Radiobutton = "label[for='impressiveRadio']";

    setradiobutton(){
        cy.get(this.Radiobutton).click()
    }

}