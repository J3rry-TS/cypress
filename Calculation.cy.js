const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
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
      cy.visit('https://beta01.medireport.dev/cardio/patients/c4bbce7f-d2bd-49d1-8162-af164a5b0198/details/dashboard')

    /// Patient exist all time
      cy.wait(4500)
      cy.visit('https://beta01.medireport.dev/cardio/patients/c4bbce7f-d2bd-49d1-8162-af164a5b0198/procedures/770b2a4b-ccbf-4afc-a2a8-714b1e5aef8a/dashboard/start/377')
      cy.wait(3500)
      /// Fill 
      cy.get('procedure-section-start').scrollTo(0, 0)
      cy.wait(4500)
      cy.get('#mat-input-2').clear()
      cy.get('#mat-input-2').type('185')
      cy.get('#mat-input-3').clear()
      cy.get('#mat-input-3').type('65')
      cy.get('#mat-input-4').click()
      cy.wait(2000)
      ///Verification contenance
      cy.contains('19')
      cy.wait(1500)
      cy.get('#mat-input-9').clear()
      cy.get('#mat-input-9').type('165')
      cy.get('procedure-section-start').scrollTo(0, 1000)
      cy.wait(2500)
      cy.get(':nth-child(5) > .с-pdh-section-title').click()
      /// SignalR updates (Hemoglobin)


      it('XIU', function(){
      cy.get(':nth-child(5) > .с-pdh-section-title').click(() => {
        if (cy.contains('["Missing Data"]')){
            cy.get('#confirmBtn').click()
        }
        else {
            cy.get(':nth-child(5) > .с-pdh-section-title').click()
        }
        })
      })



    /// "NotNow"
    cy.get('procedure-section-default').scrollTo(0, 1000)
    cy.get('#mat-input-28').clear()
    cy.get('#mat-input-28').type('14')
      cy.wait(2000)
      
    cy.get(':nth-child(6) > .с-pdh-section-title').click()
      cy.wait(1500)
      cy.get('procedure-section-default').scrollTo(0, 1000)
      cy.get('#mat-input-42').clear()
      cy.get('#mat-input-42').type('75')
      cy.get('#mat-input-45').clear()
      cy.get('#mat-input-45').type('14')
      cy.wait(5000)

      cy.get(':nth-child(3) > .с-pdh-section-title').click()
      cy.get('#mat-input-58').clear()
      cy.get('#mat-input-58').type('110')
      cy.get('#mat-input-59').clear()
      cy.get('#mat-input-59').type('105')
      cy.get('#mat-input-60').clear()
      cy.get('#mat-input-60').type('118')
      cy.get('#mat-input-61').clear()
      cy.get('#mat-input-61').type('117')
      cy.get('#mat-input-62').clear()
      cy.get('#mat-input-62').type('115')
      cy.get('#mat-input-63').clear()
      cy.get('#mat-input-63').type('112')
      cy.get('#mat-input-64').clear()
      cy.get('#mat-input-64').type('125')
      cy.get('#mat-input-65').clear()
      cy.get('#mat-input-65').type('106')
      cy.get('#mat-input-66').clear()
      cy.get('#mat-input-66').type('120')
      cy.get('#mat-input-56').clear()
      cy.get('#mat-input-56').type('2500')

/// SignalR updates
      cy.get(':nth-child(5) > .с-pdh-section-title').click()
      cy.get('#mat-input-80').clear()
      cy.get('#mat-input-80').type('75')
      cy.get('#mat-input-81').clear()
      cy.get('#mat-input-81').type('86')
      cy.get('#mat-input-82').clear()
      cy.get('#mat-input-82').type('95')
      cy.get('#mat-input-83').clear()
      cy.get('#mat-input-83').type('80')
      cy.get('#mat-input-84').clear()
      cy.get('#mat-input-84').type('98')
      cy.get('#mat-input-85').clear()
      cy.get('#mat-input-85').type('100')
      cy.get('#mat-input-86').clear()
      cy.get('#mat-input-86').type('91')
      cy.get('#mat-input-87').clear()
      cy.get('#mat-input-87').type('105')
      cy.get('#mat-input-88').clear()
      cy.get('#mat-input-88').type('112')
      cy.wait(2000)
      cy.get('#mat-input-95').type('12')
      cy.get('#mat-input-97').type('10')
      cy.get('#mat-input-99').type('10')
      /// Calculation 
      

  })
})