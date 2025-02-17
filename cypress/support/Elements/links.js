// Links class
export class Links {

    homeLinkSelector = '#simpleLink'
    dynamicLinkSelector = '#dynamicLink'

    clickHomeLink() {
        cy.get(this.homeLinkSelector).click()
    }

    clickDynamicLink() {
        cy.get(this.dynamicLinkSelector).click()
    }
}