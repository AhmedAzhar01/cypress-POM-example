// UploadAndDownload class
export class UploadAndDownload {

    downloadButtonSelector = '#downloadButton'
    uploadButtonSelector = '#uploadFile'

    downloadFile() {
        cy.get(this.downloadButtonSelector).click()
    }

    // uploadFile() {
    //     cy.get(this.uploadButtonSelector).selectFile('C:/Users/Datics/Downloads/sampleFile (2).jpeg')
    // }

    
    uploadandDownload() {
        cy.fixture('invoice-INV-000008.pdf', 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                cy.get('#uploadFile').attachFile({
                    fileContent,
                    fileName: 'invoice-INV-000008.pdf',
                    mimeType: 'file/pdf'
                });
            });
        }
}