const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const testname = `aspirine${id}`
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
      cy.visit('https://beta01.medireport.dev/cardio/settings/drugs')
      cy.wait(2500)
      cy.get('#drugsConfigurationControlPanel > div > :nth-child(3)').click()
      cy.wait(2000)
      cy.get('#mat-input-0').type(testname)
      cy.get('#mat-input-1').type('4')
      cy.get('#mat-input-5').type('Wall')
      cy.get('#mat-input-6').type('Marty')
      cy.wait(1000)
      cy.get('.mat-dialog-actions > div > .m-btn-primary').click()
      cy.wait(1500)

    })
})