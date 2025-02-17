
///<reference types="cypress"/>

import { WebTable } from "../../support/Elements/webtables.js"
const webTable = new WebTable()

describe('OrangeHRM : webtables', () => {
it('WebTable', () => {
    cy.visit("/")
    cy.contains('.card','Elements').click()
    cy.contains('Web Tables').click()
    webTable.addRecord()
    webTable.setFirstName('Ahmed')
    webTable.setLastName('Azhar')
    webTable.setEmail('ahmed@gmail.com')
    webTable.setAge('18')
    webTable.setSalary('56000')
    webTable.setDepartment('Information Technology')
    webTable.submit()
})

it('WebTable : Assertion : Search', ()=>{
    cy.visit("/")
    cy.contains('.card','Elements').click()
    cy.contains('Web Tables').click()
    cy.contains('Web Tables').should('be.visible')
    cy.get('#searchBox').type('888')
    cy.get('.rt-noData').should('contain','No rows found')
    cy.get('.rt-noData').should('be.visible')
})

it('WebTable : Assertion : Add Registration Form', ()=>{
    cy.visit("/")
    cy.contains('.card','Elements').click()
    cy.contains('Web Tables').click()
    cy.get('#addNewRecordButton').click()
    cy.get('#submit').click()
    cy.get('#firstName').should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)')
    cy.get('#lastName').should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)')
    cy.get('#userEmail').should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)')
    cy.get('#age').should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)')
    cy.get('#salary').should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)')
    cy.get('#department').should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)')
})
})