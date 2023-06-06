/// <reference types="cypress" />


var cypressTest = document.createElement('script');
  var random = Math.random();
  
describe('Load', function (){
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
    cy.wait(2000)
    cy.contains('New procedure').click()
    cy.wait(1000)
    cy.get('#mat-select-value-7 > .mat-select-placeholder').click()
    cy.get('#mat-option-23').click()
    cy.get('#mat-select-value-9 > .mat-select-placeholder').click()
    cy.get('#mat-input-12').type('coro')
    cy.get('#mat-input-12').clear()
    cy.get('#mat-input-12').type('Coro12 {Enter} ')
    cy.get('#mat-input-12').clear()
    cy.get('#mat-input-12').type('Coro12')
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
    //dispatch title
    cy.wait(4000)
///Creation Lesion on schema
    cy.get('.c-prd-container').click(650, 550)///pRCA
    cy.contains('Add').click()
    cy.wait(1000)
    cy.contains('Lesion').click()
    cy.get('.c-prd-container').click(653, 553)
    cy.wait(1000)
    ///Master chief
    cy.get('#mat-select-value-77 > .mat-select-placeholder').click()
    cy.contains('50-70%').click()
    cy.get('#mat-select-value-79 > .mat-select-placeholder').click()
    cy.contains('TIMI 2').click()
    cy.wait(500)
    cy.get('#mat-radio-58 > .mat-radio-label > .mat-radio-label-content').click()
    cy.get('#mat-radio-66 > .mat-radio-label > .mat-radio-label-content').click()
    cy.wait(1500)
    cy.get('#mat-input-18').type('6')
    cy.get('#mat-select-value-83 > .mat-select-placeholder').click()
    cy.contains('short').click()
    cy.get('#mat-select-value-85 > .mat-select-placeholder').click()
    cy.contains('no bifurcation lesion').click()
    cy.get('#mat-radio-71 > .mat-radio-label > .mat-radio-label-content').click()
    cy.get('#mat-select-value-87 > .mat-select-placeholder').click()
    cy.contains('Grade 1: Possibility of thrombus on angiography').click()
    cy.get('#mat-select-value-89 > .mat-select-placeholder').click()
    cy.contains('no dissection').click()
    cy.get('#mat-radio-75 > .mat-radio-label > .mat-radio-label-content').click()
    cy.get('#mat-slide-toggle-10 > .mat-slide-toggle-label > .mat-slide-toggle-content').click()
    cy.get('#mat-radio-83 > .mat-radio-label > .mat-radio-label-content').click()
    cy.get('#mat-select-value-91 > .mat-select-placeholder').click()
    cy.wait(500)
    cy.contains('IVUS performed').click()
    cy.get('#mat-tab-label-0-2').click()
    cy.get('#mat-select-value-101 > .mat-select-placeholder').click()
    cy.contains('occlusion').click()
    cy.get('#mat-radio-86 > .mat-radio-label > .mat-radio-label-content').click()
    cy.get('#mat-radio-90 > .mat-radio-label > .mat-radio-label-content').click()
    cy.get('.w-100 > .d-flex > :nth-child(2) > .mat-focus-indicator').click()
    cy.get('#procedureMaterialSidebar > .d-flex').click()
    cy.get('#pickFromCatalogBtn').click()
    cy.get('[aria-rowindex="2"] > [aria-label=" is template cell column header Category"] > [style="display: flex; align-items: center;"]')
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