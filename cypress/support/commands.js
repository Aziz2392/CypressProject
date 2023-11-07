// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.get('#text_input1').type(username)
    cy.get('#text_input2').type(password)
})

Cypress.Commands.add('selectDropdownOption', (selector, value) => {
    cy.get(selector).select(value)
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//

Cypress.Commands.add('logText', {prevSubject: true }, (subject) => {
    const text = subject.text()

    cy.log(`My text is: ${text}`)

    return cy.wrap(subject)
})



Cypress.Commands.add('haveText', {prevSubject: true}, (subject, expectedText) => {
  return  cy.wrap(subject).should('have.text', expectedText)
})

Cypress.Commands.add('assertAttribute', {prevSubject: true}, (subject, expectedAttr, attrValue) => {
    return  cy.wrap(subject).should('have.attr', expectedAttr).and('have.value', attrValue)
  })



//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


