// Buttons class
export class Buttons {

    btnDoubleClickMe = '#doubleClickBtn'
    btnRightClickMe = '#rightClickBtn'

    btnDoubleClickMeDblClk() {
        cy.get(this.btnDoubleClickMe).dblclick({ multiple: false })
    }

    btnRightClickMeClk() {
        cy.get(this.btnRightClickMe).rightclick({ multiple: false })
    }

    btnClickMeClk() {
        cy.get('.mt-4').eq(3).children().click()
    }
}