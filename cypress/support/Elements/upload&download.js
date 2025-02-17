// UploadAndDownload class
export class UploadAndDownload {

    downloadButtonSelector = '#downloadButton'
    uploadButtonSelector = '#uploadFile'

    downloadFile() {
        cy.get(this.downloadButtonSelector).click()
    }

    uploadFile() {
        cy.get(this.uploadButtonSelector).selectFile('C:/Users/Datics/Downloads/sampleFile (2).jpeg')
    }
}