///<reference types="cypress"/>

import { Links } from "../../support/Elements/links.js"
const links = new Links()

describe('OrangeHRM : Links', () => {
it('Links', () => {
    cy.visit("/")
    cy.contains('.card','Elements').click()
    cy.contains('Links').click()
    links.clickHomeLink()
    links.clickDynamicLink()
})
})