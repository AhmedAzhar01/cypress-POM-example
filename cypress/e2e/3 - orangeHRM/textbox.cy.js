
///<reference types="cypress"/>
import { TextBox } from "../../support/Elements/textbox.js"
const onTextBoxPage = new TextBox()

describe('TextBox', () => {

    //Positive testcase
it('TextBox', () => {   
    cy.visit("/")
    cy.contains('.card','Elements').click()
    cy.contains('Text Box').click()
    onTextBoxPage.setFullName('Ahmed Azhar')
    onTextBoxPage.setEmail('email@gmail.com')
    onTextBoxPage.setCurrentAddress('DHA phase 1')
    onTextBoxPage.setPermanentAddress('Samanabad')
    onTextBoxPage.submitButton()
})

it('Textbox - Assertion', ()=>{
    cy.visit("/")
    cy.contains('.card','Elements').click()
    cy.contains('Text Box').click()
    cy.contains('Text Box').should('be.visible')
    cy.get('#userName-label').should('be.visible')
    cy.get('#userEmail-label').should('be.visible')
    cy.get('#currentAddress-label').should('be.visible')
    cy.get('#permanentAddress-label').should('be.visible')
    cy.get('#submit').should('be.visible')
})

it('TextBox - Negative Assertion', ()=>{
    cy.visit("/")
    cy.contains('.card','Elements').click()
    cy.contains('Text Box').click()
    onTextBoxPage.setFullName('Ahmed Azhar')
    cy.get('#userEmail').type('2255').blur()
    cy.get('#submit').click()
    cy.get('#userEmail').should('have.css', 'border-bottom-color', 'rgb(255, 0, 0)')
})

})