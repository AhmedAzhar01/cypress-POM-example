// TextBox class
export class TextBox {

    fullNameSelector = '#userName'
    emailSelector = '#userEmail'
    currentAddressSelector = '#currentAddress'
    permanentAddressSelector = '#permanentAddress'
    submitSelector = '#submit'

    setFullName(fullName) {
        cy.get(this.fullNameSelector).type(fullName)
    }

    setEmail(email) {
        cy.get(this.emailSelector).type(email)
    }

    setCurrentAddress(currentAddress) {
        cy.get(this.currentAddressSelector).type(currentAddress)
    }

    setPermanentAddress(permanentAddress) {
        cy.get(this.permanentAddressSelector).type(permanentAddress)
    }

    submitButton() {
        cy.get(this.submitSelector).click()
    }
}

