export class uploadanddownload{

    downloadbutton = '#downloadButton';
    uploadbutton = '#uploadFile';

    setdownload(){
        cy.get(this.downloadbutton).click()
    }

    setupload(){
        cy.get(this.uploadbutton).selectFile('C:/Users/Datics/Downloads/sampleFile (2).jpeg')
    }

}