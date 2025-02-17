// RadioButton class
export class RadioButton {

    radioButtonSelector = "label[for='impressiveRadio']"

    selectRadioButton() {
        cy.get(this.radioButtonSelector).click()
    }
}
