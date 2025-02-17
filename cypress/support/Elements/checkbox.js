// CheckBox class
export class CheckBox {

    dropdownIcon = '.rct-icon.rct-icon-expand-close'
    checkboxSelector = '#tree-node > ol > li > span > label > span.rct-checkbox > svg'

    openDropdown() {
        cy.get(this.dropdownIcon).click()
    }

    clickCheckbox() {
        cy.get(this.checkboxSelector).click()
    }
}