///<reference types="cypress"/>

// import { Links } from "../../support/Elements/links.js"
// import { UploadAndDownload } from "../../support/Elements/upload&download.js"
// import { StudentRegistrationForm } from "../../support/Forms/student_registration_form.js"
// import { RadioButton } from "../../support/Elements/radiobutton.js"
// import { TextBox } from "../../support/Elements/textbox.js"
// import { WebTable } from "../../support/Elements/webtables.js"
// import { CheckBox } from "../../support/Elements/checkbox.js"
// import { Buttons } from "../../support/Elements/buttons.js"

// const onTextBoxPage = new TextBox()
// const checkBox = new CheckBox()
// const radioButton = new RadioButton()
// const webTable = new WebTable()
// const buttons = new Buttons()
// const links = new Links()
// const uploadAndDownload = new UploadAndDownload()
// const studentRegistrationForm = new StudentRegistrationForm()

// describe('OrangeHRM : Elements : Button', () => {

//     beforeEach('',()=>{
//         cy.visit("/")    
//     })
    // it('TextBox', () => {
       
    //     cy.contains('.card','Elements').click()
    //     cy.contains('Text Box').click()
    //     onTextBoxPage.setFullName('Ahmed Azhar')
    //     onTextBoxPage.setEmail('email@gmail.com')
    //     onTextBoxPage.setCurrentAddress('DHA phase 1')
    //     onTextBoxPage.setPermanentAddress('Samanabad')
    //     onTextBoxPage.submitButton()
    // })

    // it('CheckBox', () => {
    //     cy.visit("/")
    //     cy.contains('.card','Elements').click()
    //     cy.contains('Check Box').click()
    //     checkBox.openDropdown()
    //     checkBox.clickCheckbox()
    // })

    // it('RadioButton', () => {
    //     cy.visit("/")
    //     cy.contains('.card','Elements').click()
    //     cy.contains('Radio Button').click()
    //     radioButton.selectRadioButton()
    // })

    // it('WebTable', () => {
    //     cy.visit("/")
    //     cy.contains('.card','Elements').click()
    //     cy.contains('Web Tables').click()
    //     webTable.addRecord()
    //     webTable.setFirstName('Ahmed')
    //     webTable.setLastName('Azhar')
    //     webTable.setEmail('ahmed@gmail.com')
    //     webTable.setAge('18')
    //     webTable.setSalary('56000')
    //     webTable.setDepartment('Information Technology')
    //     webTable.submit()
    // })

    // it('Buttons', () => {
    //     cy.visit("/")
    //     cy.contains('.card','Elements').click()
    //     cy.contains('Buttons').click()
    //     buttons.btnDoubleClickMeDblClk()
    //     buttons.btnRightClickMeClk()
    //     buttons.btnClickMeClk()
    // })

    // it('Links', () => {
    //     cy.visit("/")
    //     cy.contains('.card','Elements').click()
    //     cy.contains('Links').click()
    //     links.clickHomeLink()
    //     links.clickDynamicLink()
    // })

    // it('UploadAndDownload', () => {
    //     cy.visit("/")
    //     cy.contains('.card','Elements').click()
    //     cy.contains('Upload and Download').click()
    //     uploadAndDownload.downloadFile()
    //     uploadAndDownload.uploadFile()
    // })

// })

// describe('FormsTest', () => {

//     it('forms', () => {
//         cy.visit("/")
//         cy.contains('.card','Elements').click()
//         cy.contains('Forms').click()
//         cy.contains('Practice Form').click()
//         studentRegistrationForm.setFirstName('Ahmed')
//         studentRegistrationForm.setLastName('Azhar')
//         studentRegistrationForm.setEmail('ahmed@gmail.com')
//         studentRegistrationForm.setGender()
//         studentRegistrationForm.setMobileNumber('02569587458')
//         studentRegistrationForm.setDateOfBirth()
//         studentRegistrationForm.setSubject('Automation step by step')
//         studentRegistrationForm.setHobbies()
//         studentRegistrationForm.uploadPicture()
//         studentRegistrationForm.setCurrentAddress('DHA phase 1')
//         studentRegistrationForm.setState('Haryana')
//         studentRegistrationForm.setCity('Panipat')
//         studentRegistrationForm.submit()
//     })
// })