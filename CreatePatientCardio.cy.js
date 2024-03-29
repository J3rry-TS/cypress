const random = '1' + Math.random().toString()
var cypressTest = document.createElement('script');
const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const testname = `XAE-${id}`
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
  
  
describe('Load', function (){
    it('Create a Patient', function (){
  cy.visit('https://beta01.medireport.dev/')
    cy.get('[placeholder=Username]').type('Support')
    cy.get('[placeholder=Password]').type('Medireport@2019')
    cy.get('[onclick="submitLogin()"]').click( {force: true})
    cy.contains('Cardio').click()
    cy.wait(12500)
    cy.get('#actionsDropdownBtn').click()
    cy.wait(2000)
    cy.get('body').click(1180, 250)
    cy.wait(9000)
    /// Creation patient
    cy.get('#ej2-datepicker_2_input').type('26/05/2000')
    /// Last name
    cy.get('#mat-input-5').type(testname)
    /// Birth name
    cy.get('#mat-input-10').type(testname)
    /// First name
    cy.get('#mat-input-6').type(testname)
    cy.wait(2000)
    /// Nationality
    cy.get('.mat-select-placeholder').click()
    cy.get('#mat-input-12').type('FR')
    cy.wait(3000)
    cy.contains('French').click()
    /// Gender
    cy.get('#mat-radio-7 > .mat-radio-label > .mat-radio-label-content').click()
    /// InassuranceCode
    cy.get('#mat-input-13').type(random)
    /// Test Patient
    cy.get('.mat-checkbox-label').click()
    cy.get('#saveBtn').click()

    })
})