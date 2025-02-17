///<reference types="cypress"/>

import { CheckBox } from "../../support/Elements/checkbox.js"
const checkBox = new CheckBox()

describe('OrangeHRM : checkBox', () => {
it('CheckBox', () => {
    cy.visit("/")
    cy.contains('.card','Elements').click()
    cy.contains('Check Box').click()
    checkBox.openDropdown()
    checkBox.clickCheckbox()
})
})