/// <reference types="cypress" />


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
    it('MyLesion', function (){
  cy.visit('https://beta01.medireport.dev/')
    cy.get('[placeholder=Username]').type('Support')
    cy.get('[placeholder=Password]').type('Medireport@2019')
    cy.get('[onclick="submitLogin()"]').click( {force: true})
    cy.contains('Cardio').click()
    cy.wait(10000)
    cy.get('.c-qb-dropdown > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
    cy.contains('All patients').click()
    cy.get('#mat-chip-list-input-0').type('JR {Enter}') 
    cy.wait(2000)
    cy.contains('JR').dblclick()
    cy.wait(6000)
    cy.get('.d-flex > .mat-focus-indicator').click()
    cy.wait(2000)
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
    cy.wait(6000)
    cy.get(':nth-child(9) > .с-pdh-section-title').click()
    cy.get('#confirmBtn').click()
    cy.wait(2000)
    cy.get('#mat-select-value-35 > .mat-select-placeholder').click()
    cy.contains('left dominance system').click()
    cy.get('#mat-select-value-37 > .mat-select-placeholder').click()
    cy.contains('1 major diagonal').click()
    cy.get('#mat-select-value-39 > .mat-select-placeholder').click()
    cy.contains('1 major marginal').click()
    cy.get('#mat-select-value-41 > .mat-select-placeholder').click()
    cy.contains('small LMCA').click()
    cy.get('#mat-select-value-43 > .mat-select-placeholder').click()
    ///issue Lesion
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
    cy.wait(10000)
    ///First Lesion
    cy.get('#mat-select-value-71 > .mat-select-placeholder').click()
    cy.contains('< 30%').click()
    cy.wait(1500)
    cy.get('#mat-select-value-73 > .mat-select-placeholder').click()
    cy.contains('TIMI 0').click()
    cy.wait(1500)
    cy.get('#mat-radio-55 > .mat-radio-label > .mat-radio-label-content').click()
    cy.get('#mat-radio-46 > .mat-radio-label > .mat-radio-label-content').click()
    cy.get('#mat-select-value-77 > .mat-select-placeholder').click()
    cy.contains('short').click()
    cy.get('#mat-select-value-79 > .mat-select-placeholder').click()
    cy.contains('Bifurcation 1.1.1').click()
    cy.wait(1500)
    cy.get('#mat-radio-58 > .mat-radio-label > .mat-radio-label-content').click()
    cy.get('#mat-radio-66 > .mat-radio-label > .mat-radio-label-content').click()
    cy.wait(1500)
    cy.get('#mat-input-18').type('6')
    cy.get('#mat-select-value-83 > .mat-select-placeholder').click()
    cy.contains('no dissection').click()
    cy.get('#mat-radio-71 > .mat-radio-label > .mat-radio-label-content').click()
    cy.get('#mat-select-value-81 > .mat-select-placeholder').click()
    cy.contains('Grade 1: Possibility of thrombus on angiography').click()
    cy.get('#mat-radio-62 > .mat-radio-label > .mat-radio-label-content').click()
    cy.get('#mat-select-value-85 > .mat-select-placeholder').click()
    cy.wait(500)
    cy.contains('IVUS performed').click()
    ///Finsish Page First Lesions
    cy.get('#mat-slide-toggle-10 > .mat-slide-toggle-label > .mat-slide-toggle-bar').click()
    cy.get('#mat-tab-label-0-2').click()
    cy.wait(2000)
    cy.get('#mat-tab-label-0-2 > .mat-tab-label-content').click()
    cy.get('#mat-select-value-97 > .mat-select-placeholder').click()
    cy.contains('occlusion').click()
    cy.get('#mat-radio-86 > .mat-radio-label > .mat-radio-label-content').click()
    cy.get('#mat-radio-90 > .mat-radio-label > .mat-radio-label-content').click()
    cy.get('.w-100 > .d-flex > :nth-child(2) > .mat-focus-indicator').click()
    cy.get('#procedureMaterialSidebar > .d-flex').click()
    cy.get('#pickFromCatalogBtn').click()
    cy.get('#matDialogContent').dblclick('center')
    cy.get('[aria-label="13802935 column header Reference"]').dblclick()
    cy.wait(2000)
    cy.get('#mat-input-33').type(testname)
    cy.get('#saveBtn').click()
    ///Next Step Lesion
    ///cy.get('.c-prd-container').click(610, 510)
    ///cy.wait(3000)
   /// cy.get('#mat-input-13').type('Master')
   /// cy.get('#mat-input-14').type('60')
   /// cy.get('#mat-select-value-37 > .mat-select-placeholder').click()
   /// cy.contains('50%').click()
   /// cy.get('.w-100 > .d-flex > :nth-child(2) > .mat-focus-indicator').click()
   /// cy.wait(500)
   /// cy.get('#confirmBtn').click()
   /// cy.get('.c-prd-container').click(875, 510) ///1st diag
   /// cy.contains('Add').click()
   /// cy.get('#mat-tab-label-0-1').click()
   /// cy.get('.w-100 > .d-flex > :nth-child(2) > .mat-focus-indicator').click()
    ///Add lesions gradual steps
    ///cy.wait(1000)
    ///cy.contains('Lesion').click()
    ///cy.get('.c-prd-container').click(300, 555)///mRCA
    ///cy.get('#mat-radio-71 > .mat-radio-label > .mat-radio-label-content')
    ///cy.get('.d-flex > :nth-child(1) > .mat-focus-indicator').click()
    ///cy.wait(500)
    ///cy.get('#okConfirmBtn').click()
    ///cy.get('#mat-select-value-51 > .mat-select-placeholder').click()
    ///cy.get('#okConfirmBtn').click()/// Confirm page request
    ///cy.get('Yes').click()
    ///if condition > reverse template ?
    /// commands tapping full udapte/upgrade
  });

  //setTimeout(function() {
    //var xhr = new XMLHttpRequest();
    //xhr.onreadystatechange = function() {
      //if (xhr.readyState == XMLHttpRequest.DONE) {
      //  console.log(xhr.responseText);
      //}
   // }
    //xhr.open('GET', 'https://192.168.0.41/account/login', true);
    //xhr.send(null);
 // }, random * 1000);

})