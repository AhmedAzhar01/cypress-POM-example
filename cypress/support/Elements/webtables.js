// WebTable class
export class WebTable {

    addRecordButton = '#addNewRecordButton'
    firstNameSelector = '#firstName'
    lastNameSelector = '#lastName'
    emailSelector = '#userEmail'
    ageSelector = '#age'
    salarySelector = '#salary'
    departmentSelector = '#department'
    submitSelector = '#submit'

    addRecord() {
        cy.get(this.addRecordButton).click()
    }

    setFirstName(firstName) {
        cy.get(this.firstNameSelector).type(firstName)
    }

    setLastName(lastName) {
        cy.get(this.lastNameSelector).type(lastName)
    }

    setEmail(email) {
        cy.get(this.emailSelector).type(email)
    }

    setAge(age) {
        cy.get(this.ageSelector).type(age)
    }

    setSalary(salary) {
        cy.get(this.salarySelector).type(salary)
    }

    setDepartment(department) {
        cy.get(this.departmentSelector).type(department)
    }

    submit() {
        cy.get(this.submitSelector).click()
    }
}
