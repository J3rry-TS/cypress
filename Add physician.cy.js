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

  describe('Load', function (){
    it('UIX', function (){
      cy.viewport(1920, 1080)
      cy.visit('https://beta01.medireport.dev/cardio/portal')
      cy.get('[placeholder=Username]').type('Support')
      cy.get('[placeholder=Password]').type('Medireport@2019')
      cy.get('[onclick="submitLogin()"]').click( {force: true})
      cy.wait(3500)
      cy.visit('https://beta01.medireport.dev/cardio/settings/physicians')
      cy.wait(4500)
      ///Page Attendees & Referrers configuration
      cy.get('#physicianControlPanel > div > :nth-child(3)').click()
      /// Add new physician
      cy.get('#mat-select-value-5 > .mat-select-placeholder').click()
      ///title of physician
      cy.wait(2500)
      cy.get('#mat-option-260 > .mat-option-text').click()
      cy.get('#mat-input-2').type(testname)
      ///First name
      cy.get('#mat-input-3').type(testname)
      ///Last name
      cy.get('#mat-radio-6 > .mat-radio-label > .mat-radio-label-content').click()
      ///Gender
      cy.get('#referring > .mat-checkbox-layout > .mat-checkbox-label').click()
      /// Referring capabilities
      cy.get('#admitting > .mat-checkbox-layout > .mat-checkbox-label').click()
      /// Attending capabilities
      cy.get('#saveBtn').click()
      /// Confirm Creation new physician
      cy.wait(2500)
    })
})