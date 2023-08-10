var cypressTest = document.createElement('script');
const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const testname = `number${id}`
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
  
  
describe('Lesion', function (){
    it('Added Lesion', function (){
  cy.visit('https://beta01.medireport.dev/')
    cy.get('[placeholder=Username]').type('Support')
    cy.get('[placeholder=Password]').type('Medireport@2019')
    cy.get('[onclick="submitLogin()"]').click( {force: true})
    cy.contains('Cardio').click()
    cy.wait(10000)
    cy.get('.c-qb-dropdown > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
    cy.contains('All patients').click()
    ///Select Patient
    cy.get('#mat-chip-list-input-0').type('JR {Enter}') 
    cy.wait(2000)
    cy.contains('JR').dblclick()
    cy.wait(6000)
    ///Open Patient Dashboard
    cy.get('.d-flex > .mat-focus-indicator').click()
    cy.wait(2000)


    ///Creation Procedure
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
    ///Confirm Creation Procedure


    cy.wait(6000)
    cy.get(':nth-child(9) > .с-pdh-section-title').click()
    cy.get('#confirmBtn').click()
    cy.wait(2000)
    ///Lesion Page


    cy.get('#mat-select-value-35 > .mat-select-placeholder').click()
    cy.contains('left dominance system').click()
    cy.get('#mat-select-value-37 > .mat-select-placeholder').click()
    cy.contains('1 major diagonal').click()
    cy.get('#mat-select-value-39 > .mat-select-placeholder').click()
    cy.contains('1 major marginal').click()
    cy.get('#mat-select-value-41 > .mat-select-placeholder').click()
    cy.contains('small LMCA').click()
    cy.get('#mat-select-value-43 > .mat-select-placeholder').click()
    cy.contains('Selective injection').click()
    cy.get('#mat-select-value-45 > .mat-select-placeholder').click()
    cy.contains('LMCA from right antero coronary sinus').click()
    cy.get('#mat-select-value-47 > .mat-select-placeholder').click()
    cy.contains('moderate').click()
    cy.get('#mat-select-value-49 > .mat-select-placeholder').click()
    cy.contains('small LAD').click()
    cy.wait(4000)
    ///Creation Lesion on schema


    cy.get('.c-prd-container').click(650, 550)///pRCA
    cy.contains('Add').click()
    cy.wait(1000)
    cy.contains('Lesion').click()
    cy.get('.c-prd-container').click(653, 553)
    cy.wait(4000)
    ///First Lesion


    cy.get('#mat-select-value-71 > .mat-select-placeholder').click()
    cy.contains('< 30%').click()
    cy.get('#mat-select-value-73 > .mat-select-placeholder').click()
    cy.contains('TIMI 1').click()
    cy.get('#mat-radio-46 > .mat-radio-label > .mat-radio-label-content').click()
    /// "Yes" Ostial lesion
    cy.get('#mat-radio-54 > .mat-radio-label > .mat-radio-label-content').click()
    ///"Yes" Previously Treated Lesion
    cy.get('#mat-input-18').type('5')
    ///Diamètre de référence
    cy.get('#mat-select-value-77 > .mat-select-placeholder').click()
    cy.contains('intermediate (10-20 mm)').click()
    cy.get('#mat-select-value-79 > .mat-select-placeholder').click()
    cy.contains('no bifurcation lesion').click()
    cy.get('#mat-radio-58 > .mat-radio-label > .mat-radio-label-content').click()
    cy.get('#mat-select-value-81 > .mat-select-placeholder').click()
    cy.contains('Grade 2: Definite thrombus').click()
    cy.get('#mat-select-value-83 > .mat-select-placeholder').click()
    cy.contains('no dissection').click()
    cy.get('#mat-radio-63 > .mat-radio-label > .mat-radio-label-content').click()
    cy.get('.w-100 > .d-flex > :nth-child(2) > .mat-focus-indicator').click()
    ///Confirm Lesion
    cy.wait(2000)
    cy.get('#confirmBtn').click()
    cy.wait(3500)

    cy.get('circle').click(481, 326)///pRCA
    cy.contains('Add').click()
    cy.wait(1000)
    cy.contains('Lesion').click()
    cy.get('circle node=71').click(554, 449)
    cy.wait(4000)
    cy.get('#mat-select-value-71 > .mat-select-placeholder').click()
    cy.contains('< 30%').click()
    cy.get('#mat-select-value-73 > .mat-select-placeholder').click()
    cy.contains('TIMI 1').click()
    cy.get('#mat-radio-46 > .mat-radio-label > .mat-radio-label-content').click()
    /// "Yes" Ostial lesion
    cy.get('#mat-radio-54 > .mat-radio-label > .mat-radio-label-content').click()
    ///"Yes" Previously Treated Lesion
    cy.get('#mat-input-18').type('5')
    ///Diamètre de référence
    cy.get('#mat-select-value-77 > .mat-select-placeholder').click()
    cy.contains('intermediate (10-20 mm)').click()
    cy.get('#mat-select-value-79 > .mat-select-placeholder').click()
    cy.contains('no bifurcation lesion').click()
    cy.get('#mat-radio-58 > .mat-radio-label > .mat-radio-label-content').click()
    cy.get('#mat-select-value-81 > .mat-select-placeholder').click()
    cy.contains('Grade 2: Definite thrombus').click()
    cy.get('#mat-select-value-83 > .mat-select-placeholder').click()
    cy.contains('no dissection').click()
    cy.get('#mat-radio-63 > .mat-radio-label > .mat-radio-label-content').click()
    cy.get('.w-100 > .d-flex > :nth-child(2) > .mat-focus-indicator').click()
    ///Confirm Lesion
    cy.wait(2000)
    cy.get('#confirmBtn').click()
    })

    it('Finish procedure', function (){
        cy.visit('https://beta01.medireport.dev/')
        cy.get('[placeholder=Username]').type('Support')
        cy.get('[placeholder=Password]').type('Medireport@2019')
        cy.get('[onclick="submitLogin()"]').click( {force: true})
        cy.contains('Cardio').click()
        cy.wait(10000)
        cy.get(':nth-child(1) > .mat-card-content > .main-row').dblclick()
        cy.wait(4000)
        ///Labs
        cy.get('#sectionWrapper > :nth-child(2)').click()
        cy.wait(2000)
        cy.get('#confirmBtn').click()
        ///Creatinine NCDR_6050
        cy.get('#mat-input-9').type('80')

        ///Medication
        cy.get('#sectionWrapper > :nth-child(3)').click()
        cy.wait(2000)
        cy.get('#mat-radio-27 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-31 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-35 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-39 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-43 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-47 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-51 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-select-value-27 > .mat-select-placeholder').click()
        cy.contains('cangrelor').click()
        cy.get('#mat-select-value-29 > .mat-select-placeholder').click()
        cy.contains('héparine').click()
        cy.get('#mat-radio-55 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-59 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-63 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-67 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-71 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-75 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-79 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-83 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-87 > .mat-radio-label > .mat-radio-label-content').click()

        ///Risk Factors
        cy.get('#sectionWrapper > :nth-child(4)').click()
        cy.get('#mat-radio-103 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-107 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-111 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-115 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-135 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-139 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-143 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-147 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-select-value-37 > .mat-select-placeholder').click()
        cy.contains('Never smoked').click()
        cy.get('#mat-select-value-33 > .mat-select-placeholder').click()
        cy.wait(2000)
        cy.contains('no').click()
        cy.get('#mat-radio-119 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-select-value-31 > .mat-select-placeholder').click()
        cy.contains('ischemic').click()

        ///cy.get('#sectionWrapper > :nth-child(5)').click()
        ///Clinical Status

        cy.get('#sectionWrapper > :nth-child(1)').click()
        ///Start
        cy.get('#mat-select-value-125 > .mat-select-placeholder').type('maria')
        cy.contains('Cardild').click()
        cy.get('#mat-radio-227 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-input-32').type('175')
        cy.get('#mat-input-33').type('70')
        cy.get('ng-star-inserted').scrollTo(0, 500)
        cy.get('#mat-select-value-135 > .mat-select-placeholder').click()
        cy.contains('elective').click()
        cy.get('#mat-radio-231 > .mat-radio-label > .mat-radio-label-content').click()

    })

})