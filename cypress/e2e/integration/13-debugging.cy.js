describe('Debugging', () => {

it('cy.wait() - Hard Wait', () => {

    cy.visit('https://techglobal-training.com/frontend')
    cy.get('.cards').contains('Html Elements').click()

    cy.wait(10000)
    cy.get('#checkbox_1').check()



})

it('Debugging using pause', () => {
    cy.visit('https://techglobal-training.com/frontend')
    cy.get('.cards').contains('Project - Login Function').click()

    cy.get('#username').type('TechGlobal')

    cy.pause()

    cy.get('#password').type('Test1234')

    cy.get('#login_btn').click()

    cy.get('#success_lgn').should('be.visible')

})



})