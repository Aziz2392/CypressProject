
/**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "IFrames" card
   * Validate the "Please fill out your information below" text
   */

/*
describe('iFrames in Cypress', () => {

    it('iFrames', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('IFrames').click()


        //cy.get('.label mb-4').should('have.text', 'Please fill out your information below')
        //cy.get('#form_frame').its('0.contentDocument.body')
        //.should('not.be.empty')
        //.find('#name_form > p').should('have.text', 'Please fill out your information below')
        */
        /*
        * Go to https://techglobal-training.com/frontend/
        * Click on the "IFrames" card
        * Enter "John" into the first name input box
        * Enter "Doe" into the last name input box
        * Click on the "SUBMIT" button
        * Validate the result equals "You entered: John Doe"
        */
        
        /*
        cy.get('#form_frame').its('0.contentDocument.body')
        .should('not.be.empty')
        .find('#first_name').type('John')
        
        cy.get('#form_frame').its('0.contentDocument.body')
        .should('not.be.empty')
        .find('#last_name').type('Doe')
        */

        /*
        cy.get('#form_frame').its('0.contentDocument.body').find('input').as('formFrame')

        const names = ['John', 'Doe']

        cy.get('@formFrame').each(($el, index) => {
            cy.wrap($el).clear().type(names[index])
            
            
        })

        cy.get('#form_frame').its('0.contentDocument.body').find('#submit').click()
        cy.get('#result').should('have.text', `You entered: ${name.join(' ')}`)       
        */


        describe('iFrames in Cypress', () => {

        it('iFrames validate login', () => {

            cy.visit('https://techglobal-training.com/frontend')
            cy.get('.cards').contains('IFrames').click()
        
            const name = ['John', 'Doe']
        
            cy.get('#form_frame')
            .its('0.contentDocument.body').find('#first_name,#last_name').each(($el, index) => {
                cy.wrap($el).type(name[index])
            })
        
            cy.get('#form_frame').its('0.contentDocument.body').find('#submit').click()
        
            cy.get('#result').should('have.text', `You entered: ${name.join(' ')}`)
        
          })
        
    
        })
