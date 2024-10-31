///<reference types="cypress"/>

import {links} from "../../support/pages/links.js"
import {uploadanddownload} from "../../support/pages/upload&download.js"
import {studentregistrationform} from "../../support/pages/student_registration_form.js"
import {Radiobutton } from "../../support/pages/radiobutton.js"
import { TextBox } from "../../support/pages/textbox.js"
import { webtable } from "../../support/pages/webtables.js"
import { CheckBox } from "../../support/pages/checkbox.js"
import { buttons } from "../../support/pages/Buttons.js"

const tb= new TextBox()
const cb= new CheckBox()
const rb= new Radiobutton()
const wb= new webtable()
const btn= new buttons()
const link= new links()
const ud= new uploadanddownload()
const sf= new studentregistrationform()

describe('OrangeHRM', ()=>{

    it('TextBox', ()=>{
        cy.visit("https://demoqa.com/")
        // cy.get("input[placeholder='Username']").type('Admin')
        // cy.get("input[placeholder='Password']").type('admin123')
        // cy.get("button[type='submit'").click()
        // cy.get(".oxd-text").should('have.text' , 'Dashboard')
        cy.contains('.card','Elements').click()
        cy.contains('Text Box').click()
        tb.setfullname('Ahmed Azhar')
        tb.setemail('email@gmail.com')
        tb.setCurrentAddress('DHA phase 1')
        tb.setPermanentAddress('Samanabad')
        tb.btnsubmit(); 
    })

    it('CheckBox', ()=>{
        cy.visit("https://demoqa.com/")
        cy.contains('.card','Elements').click()
        cy.contains('Check Box').click() 
        // cy.get('.rct-icon.rct-icon-expand-close').click()
        cb.setdropdown();
        cb.setclickcheckboxs();
})

    it('Radio Button', ()=>{
        cy.visit("https://demoqa.com/")
        cy.contains('.card','Elements').click()
        cy.contains('Radio Button').click()
        rb.setradiobutton();
})

    it('Radio Button', ()=>{
        cy.visit("https://demoqa.com/")
        cy.contains('.card','Elements').click()
        cy.contains('Radio Button').click()
        cy.contains('Web Tables').click()
        wb.setadd();
        wb.setfirstname('Ahmed');
        wb.setlastname('Azhar');
        wb.setemail('ahmed@gmail.com');
        wb.setage('18');
        wb.setsalary('56000');
        wb.setDepartment('Information Technology');
        wb.setsubmit();
    })

        it('Buttons', ()=>{
            cy.visit("https://demoqa.com/")
            cy.contains('.card','Elements').click()
            cy.contains('Radio Button').click()
            cy.contains('Web Tables').click()
            cy.contains('Buttons').click()
            btn.setdoubleclick();
            btn.setrightclick();
            btn.setclickme();
    })

        it('Links', ()=>{
            cy.visit("https://demoqa.com/")
            cy.contains('.card','Elements').click()
            cy.contains('Radio Button').click()
            cy.contains('Web Tables').click()
            cy.contains('Buttons').click()
            cy.contains('Links').click()
            link.sethomelink();
            link.sethomet2vaX();

        })

        it('Upload and Download', ()=>{
            cy.visit("https://demoqa.com/")
            cy.contains('.card','Elements').click()
            cy.contains('Radio Button').click()
            cy.contains('Web Tables').click()
            cy.contains('Buttons').click()
            cy.contains('Upload and Download').click()
            ud.setdownload();
            ud.setupload();
})
})

describe('FormsTest', ()=>{

    it('forms', ()=>{
        cy.visit("https://demoqa.com/")
        cy.contains('.card','Elements').click()
        cy.contains('Radio Button').click()
        cy.contains('Web Tables').click()
        cy.contains('Buttons').click()
        cy.contains('Links').click()
        cy.contains('Upload and Download').click()
        cy.contains('Forms').click()
        cy.contains('Practice Form').click()
        sf.setfame('Ahmed')
        sf.setlname('Azhar')
        sf.setemail('ahmed@gmail.com')
        sf.setgender('02569587458')
        sf.setmobile()
        sf.setDOB()
        sf.setsubject('Automation step by step')
        sf.sethobbies()
        sf.setpicture()
        sf.setcurrentaddress('DHA phase 1')
        sf.setstateofcity('Haryana')
        sf.setSOC('Panipat')
        sf.setsubmit();

    })


})