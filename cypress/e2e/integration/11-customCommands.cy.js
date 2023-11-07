/// <reference types="cypress" />

describe('Custom Commands', () => {

    it('Parent Command', () => {
        cy.visit("https://techglobal-training.com/frontend");
        cy.get('.cards').contains('Html Elements').click()
        

        cy.login('Tech', 'Global')

        cy.selectDropdownOption('#company_dropdown1', 'Apple')
        cy.selectDropdownOption('#company_dropdown2', 'Microsoft')
    })

    it('Child Command', () => {
        cy.visit("https://techglobal-training.com/frontend");
        cy.get('.cards').contains('Html Elements').click()

        cy.get('#main_heading').then(($el) => {
            cy.log($el.text())
        })

        cy.get('#main_heading').logText()

        cy.get('#main_heading').assertAttribute('id', 'main_heading')
    })
})



/**
 * 	IMPORTANT NOTE
 * 	
 * 	When you define a custom command in Cypress and use prevSubject: true, or 'element' or 'window' or 'document', 
 * the command will automatically yield the subject.
 * 	
 * 	When you set prevSubject: true, Your custom command functions acts like a .then() callback, giving you direct access 
 * to subject so you can interact with it like jQuery Object
 * 	
 * 	
 * 	Key Point Here:
 * 	
 * 	1. prevSubhect ensures that your command is a child command 
 *  that will operate on the subject yielded by the previous command in the chain.
 * 	2. The function you provide Cypress.Commands.add with prevSubject: true 
 *  works like .then() in that block and lets you directly interact with the yielded subject.
 */