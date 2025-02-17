// StudentRegistrationForm class
export class StudentRegistrationForm {

    setFirstName(firstName) {
        cy.get('#firstName').type(firstName)
    }

    setLastName(lastName) {
        cy.get('#lastName').type(lastName)
    }

    setEmail(email) {
        cy.get('#userEmail').type(email)
    }

    setGender() {
        cy.get("label[for='gender-radio-1']").click()
    }

    setMobileNumber(mobileNumber) {
        cy.get('#userNumber').type(mobileNumber)
    }

    setDateOfBirth() {
        cy.get('#dateOfBirthInput').click()
    }

    setSubject(subject) {
        cy.get('.subjects-auto-complete__value-container').type(subject)
    }

    setHobbies() {
        cy.get("label[for='hobbies-checkbox-3']").click()
    }

    // uploadPicture() {
    //     cy.get('#uploadPicture').selectFile('cypress/fixtures/example.json');
    // }

    // uploadPicture() {
    //     cy.get('#uploadPicture').selectFile('cypress/fixtures/invoice-INV-000008.pdf')
    // }

    // uploadPicture() {
    //     cy.get('#uploadPicture').selectFile('cypress/fixtures/sampleFile.jpeg', { force: true });
    // }

    uploadPicture() {
        cy.fixture('invoice-INV-000008.pdf', 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                cy.get('#uploadPicture').attachFile({
                    fileContent,
                    fileName: 'invoice-INV-000008.pdf',
                    mimeType: 'file/pdf'
                });
            });
        }
    
    
    setCurrentAddress(currentAddress) {
        cy.get('#currentAddress').type(currentAddress)
    }

    setState(state) {
        cy.get('#state').click()
        cy.contains(state).click()
    }

    setCity(city) {
        cy.get('#city').click()
        cy.contains(city).click()
    }

    submit() {
        cy.get('#submit').click()
    }
}