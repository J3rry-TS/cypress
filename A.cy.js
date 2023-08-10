describe('Lesion', function (){
    it('Added Lesion', function (){
  cy.visit('https://beta01.medireport.dev/')
    cy.get('[placeholder=Username]').type('Support')
    cy.get('[placeholder=Password]').type('Medireport@2019')
    cy.get('[onclick="submitLogin()"]').click( {force: true})
    cy.contains('Cardio').click()
    cy.wait(10000)
    cy.visit('https://beta01.medireport.dev/cardio/patients/0562cee5-3f01-4468-9eb4-99f133bc11fa/procedures/3c3cdd12-fe7b-4f1f-9f90-3bdeb55e3d8b/dashboard/coronaryTree/382')
    cy.wait(5000)
    cy.get('cdk-overlay-6').click(437, 292)

    })
})