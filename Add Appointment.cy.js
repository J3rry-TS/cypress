describe('Load', function (){
    it('MyLesion', function (){
  cy.visit('https://beta01.medireport.dev/')
    cy.get('[placeholder=Username]').type('Support')
    cy.get('[placeholder=Password]').type('Medireport@2019')
    cy.get('[onclick="submitLogin()"]').click( {force: true})
    cy.contains('Scheduler').click()
    cy.wait(5000)
    cy.get('.main-layout').click('center')
    cy.get('.main-layout').click('center')
    cy.get('#addBtn').click()
    cy.wait(3000)
    cy.get('#searchButton').click()
    cy.wait(2000)
    cy.get('#mat-chip-list-input-1').type('JR {Enter}')
    cy.get('.e-gridpager').click()
    cy.wait(2000)
    cy.get('[aria-label="8009 column header PID"]').click()
    cy.get('#okBtn').click()
    cy.wait(2000)
    cy.get('#mat-select-value-29 > .mat-select-placeholder').click()
    cy.wait(1500)
    cy.contains('[ a ] Ablation').click()
    cy.get('#mat-radio-6 > .mat-radio-label > .mat-radio-label-content').click()

    })
})