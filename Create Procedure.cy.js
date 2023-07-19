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
      cy.visit('https://beta01.medireport.dev/cardio/')
      cy.wait(3000)
      cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-arrow-wrapper').click()
      cy.contains('All patients').click()
      cy.get('#mat-chip-list-input-0').type('JR {Enter}') 
      cy.wait(2000)
      cy.contains('JR').dblclick()
      cy.wait(6000)
      cy.get('.d-flex > .mat-focus-indicator').click()
      cy.wait(1000)
      cy.get('#mat-select-value-7 > .mat-select-placeholder').click()
      cy.get('#mat-option-17').click()
      cy.get('#mat-select-value-9 > .mat-select-placeholder').click()
      cy.get('#mat-input-12').type('auto')
      cy.get('#mat-input-12').clear()
      cy.get('#mat-input-12').type('auto {Enter} ')
      cy.get('#mat-input-12').clear()
      cy.get('#mat-input-12').type('auto')
      cy.wait(3000)
      cy.get('.mat-option-text').dblclick()
      cy.wait(1000)
      cy.get('#saveBtn').click()
      cy.wait(5500)
      ///Fill procedure PCI template "Start"
      cy.get('#mat-select-value-21 > .mat-select-placeholder').click()
      cy.wait(500)
      cy.contains('Bean Jerry').click()
      cy.get('procedure-section-start').scrollTo(0, 0)
      cy.wait(2500)
      cy.get('#mat-input-15').type('185')
      cy.get('#mat-input-16').type('80')
      cy.get('#mat-slide-toggle-3 > .mat-slide-toggle-label').click()
      cy.get('#mat-slide-toggle-4 > .mat-slide-toggle-label').click()
      cy.get('procedure-section-start').scrollTo(0, 1000)
      cy.wait(2000)
      cy.get('#mat-select-value-31 > .mat-select-placeholder').click()
      cy.wait(1500)
      cy.contains('emergency').click()
      cy.wait(1500)
      cy.get('#mat-radio-10 > .mat-radio-label > .mat-radio-label-content').click()
      cy.get('procedure-section-start').scrollTo(0, 0)
      cy.wait(1500)
      cy.get('#mat-radio-6 > .mat-radio-label > .mat-radio-label-content').click()
      cy.wait(2000)
      cy.get(':nth-child(4) > .с-pdh-section-title').click()
      cy.wait(2000)
      ///cy.get('#confirmBtn').click().then(($el)=> {
      ///  if ($el.lenght){ cy.contains('Missing Data')

      ///  } else { cy.get('#mat-radio-26 > .mat-radio-label > .mat-radio-label-content').click()

      ///  }
      ///})
      ///Page History Risk Factor
      cy.get('#mat-radio-26 > .mat-radio-label > .mat-radio-label-content').click()
      cy.get('#mat-radio-30 > .mat-radio-label > .mat-radio-label-content').click()
      cy.get('#mat-radio-34 > .mat-radio-label > .mat-radio-label-content').click()
      cy.get('#mat-radio-38 > .mat-radio-label > .mat-radio-label-content').click()
      cy.get('#mat-radio-43 > .mat-radio-label > .mat-radio-label-content').click()
      cy.get('#mat-select-value-35 > .mat-select-placeholder').click()
      cy.contains('moderate').click()
      cy.get('screenshot-height-container').scrollTo()

      ///Medical History 
      ///Risk Factor 

      

    })
})