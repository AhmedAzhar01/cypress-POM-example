
///<reference types="cypress"/>

import { RadioButton } from "../../support/Elements/radiobutton.js"
const radioButton = new RadioButton()

describe('OrangeHRM : RadioButton', () => {
it('RadioButton', () => {
    cy.visit("/")
    cy.contains('.card','Elements').click()
    cy.contains('Radio Button').click()
    radioButton.selectRadioButton()
})

it('RadioButton : Assertion : Yes', ()=>{
    cy.visit("/")
    cy.contains('.card','Elements').click()
    cy.contains('Radio Button').click()
    cy.contains('Radio Button').should('be.visible')
    cy.contains('Yes').click()
    cy.contains('Yes').should('be.visible')
})


it('RadioButton : Assertion : Impressive', ()=>{
    cy.visit("/")
    cy.contains('.card','Elements').click()
    cy.contains('Radio Button').click()
    cy.contains('Radio Button').should('be.visible')
    radioButton.selectRadioButton()
    cy.contains('Impressive').should('be.visible')
})

})