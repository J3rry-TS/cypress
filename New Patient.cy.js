const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const testname = `Misterauto${id}`
const Height = `id`

function strRandom(o) {
    var a = 2,
        b = '1234567890',
        c = '',
        d = 0,
        e = ''+b;
    if (o) {
      if (o.startsWithLowerCase) {
        c = b[Math.floor(Math.random() * b.length)];
        d = 1;
      }
      if (o.length) {
        a = o.length;
      }
      if (o.includeUpperCase) {
        e += b.toUpperCase();
      }
      if (o.includeNumbers) {
        e += '1234567890';
      }
    }
    for (; d < a; d++) {
      c += e[Math.floor(Math.random() * e.length)];
    }
    return c;
  }


describe('New Patient in Scheduler', function (){
    it('Creation Patient', function (){
  cy.visit('https://beta01.medireport.dev/')
    cy.get('[placeholder=Username]').type('Support')
    cy.get('[placeholder=Password]').type('Medireport@2019')
    cy.get('[onclick="submitLogin()"]').click( {force: true})
    cy.contains('Scheduler').click()
    cy.wait(12000)
    cy.get('#patientsSidebar > a.ng-star-inserted').click()
    cy.visit('https://beta01.medireport.dev/scheduler/patients')
    cy.wait(5000)
    ///Click new Patient button
    cy.get('#createNewBtn').click()
    cy.wait(4000)
    ///Page Creation Patient
    cy.get('#mat-radio-11 > .mat-radio-label > .mat-radio-label-content').click()
    ///Last name
    cy.get('#mat-input-21').type(testname)
    ///First name
    cy.get('#mat-input-22').type(testname)
    ///Birth name
    cy.get('#mat-input-34').type(testname)
    cy.get('#ej2-datepicker_5_input').type('14/05/1995')
    ///Date Birth
    cy.get('#mat-select-value-11 > .mat-select-placeholder').type('FR')
    cy.wait(2000)
    cy.contains('french').click()
    cy.get('#mat-tab-label-2-1').click()
    cy.wait(2000)
    ///Adress page
    cy.get('.ml-auto > .mat-focus-indicator').click()
    cy.wait(3000)
    cy.get('#mat-input-29').type('21 Avenue')
    ///Save address
    cy.get('.d-flex > #saveBtn').click()
    cy.wait(3000)
    ///Save New Patient
    cy.get('#saveBtn').click()
    })

})