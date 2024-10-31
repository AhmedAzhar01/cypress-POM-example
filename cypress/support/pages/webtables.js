export class webtable{

    Add = '#addNewRecordButton';
    firstname = '#firstName';
    lastname = '#lastName';
    Email = '#userEmail';
    Age = '#age';
    Salary = '#salary';
    Department = '#department';
    submit = '#submit';

    setadd(){
        cy.get(this.Add).click()
    }
    setfirstname(firstname){
        cy.get(this.firstname).type(firstname)
    }
    setlastname(lastname){
        cy.get(this.lastname).type(lastname)
    }
    setemail(email){
        cy.get(this.Email).type(email)
    }
    setage(age){
        cy.get(this.Age).type(age)
    }
    setsalary(salary){
        cy.get(this.Salary).type(salary)
    }
    setDepartment(Department){
        cy.get(this.Department).type(Department)
    }
    setsubmit(){
        cy.get(this.submit).click()
    }


}