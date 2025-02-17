
///<reference types="cypress"/>

import { UploadAndDownload } from "../../support/Elements/upload&download.js"
const uploadAndDownload = new UploadAndDownload()

describe('OrangeHRM : Upload&Download', () => {
it('UploadAndDownload', () => {
    cy.visit("/")
    cy.contains('.card','Elements').click()
    cy.contains('Upload and Download').click()
    uploadAndDownload.downloadFile()
    uploadAndDownload.uploadFile()
})
})