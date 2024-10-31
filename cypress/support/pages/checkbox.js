export class CheckBox{

    dropdown = '.rct-icon.rct-icon-expand-close';
    CheckBox = '#tree-node > ol > li > span > label > span.rct-checkbox > svg';

    setdropdown(){
        cy.get(this.dropdown).click()

    }

    setclickcheckboxs(){
        cy.get(this.CheckBox).click()

    }

}