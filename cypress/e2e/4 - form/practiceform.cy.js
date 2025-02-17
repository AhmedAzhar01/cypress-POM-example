///<reference types="cypress"/>

import { StudentRegistrationForm } from "../../support/Forms/student_registration_form.js"
const studentRegistrationForm = new StudentRegistrationForm()

describe('OrangeHRM : PracticeForm', () => {
it.only('forms', () => {
    cy.visit("/")
    cy.contains('.card','Elements').click()
    cy.contains('Forms').click()
    cy.contains('Practice Form').click()
    studentRegistrationForm.setFirstName('Ahmed')
    studentRegistrationForm.setLastName('Azhar')
    studentRegistrationForm.setEmail('ahmed@gmail.com')
    studentRegistrationForm.setGender()
    studentRegistrationForm.setMobileNumber('02569587458')
    studentRegistrationForm.setDateOfBirth()
    studentRegistrationForm.setSubject('Automation step by step')
    studentRegistrationForm.setHobbies()
    studentRegistrationForm.uploadPicture();
    studentRegistrationForm.setCurrentAddress('DHA phase 1')
    studentRegistrationForm.setState('Haryana')
    studentRegistrationForm.setCity('Panipat')
    studentRegistrationForm.submit()
})

it('forms : Apply Assertion', () => {
    cy.visit("/")
    cy.contains('.card','Elements').click()
    cy.contains('Forms').click()
    cy.contains('Practice Form').click()
    cy.get('#submit').click()
    cy.get('#firstName').should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)')
    cy.get('#lastName').should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)')
    cy.get('#gender-radio-1').should('have.css', 'border-bottom-color', 'rgb(33, 37, 41)')
    cy.get('#userNumber').should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)')

})
})