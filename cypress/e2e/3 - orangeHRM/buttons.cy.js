///<reference types="cypress"/>

import { Buttons } from "../../support/Elements/buttons.js"
const buttons = new Buttons()

describe('OrangeHRM : Buttons', () => {
it('Buttons', () => {
    cy.visit("/")
    cy.contains('.card','Elements').click()
    cy.contains('Buttons').click()
    buttons.btnDoubleClickMeDblClk()
    buttons.btnRightClickMeClk()
    buttons.btnClickMeClk()
})

it('Buttons : Assertion' , () => {
    cy.visit("/")
    cy.contains('.card','Elements').click()
    cy.contains('Buttons').click()
    buttons.btnDoubleClickMeDblClk()
    buttons.btnRightClickMeClk()
    buttons.btnClickMeClk()
    cy.get('#doubleClickMessage').should('be.visible')
    cy.get('#rightClickMessage').should('be.visible')
    cy.get('#dynamicClickMessage').should('be.visible')
})
})