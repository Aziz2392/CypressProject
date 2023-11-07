/// <reference types="cypress" />

describe('Cypress Assertions', () => {

    it('Default Assertions', () => {

        // This will fail if the page doesn't send text/html with a 200 status
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Html Elements').click()

        cy
        // there is a default assertion that this
        // button must exist in the DOM before proceeding
        .get('#register_button')
        // since cypress internally checks if the web element on the dom tree or not
        // we dont need to do below assertion
        // .should('be.visible')

        // before issuing the click, this button must be "actioanable"
        // it connat be covered, ordisabled,  hidden from the view.
        .click()

        // This will fail if the element os not typable.
        cy.get('#text_input1').type('TechGlobal')
    })

    it('Implicit Assertions', () => {

        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Html Elements').click()

        // Any assertion we do using .should() method, is an "Implicit Assertion"



        // be.visible checks if the web element displayed on the UI
        cy.get('#main_heading').should('be.visible')

        // This assertion checks if the subjected elements visible text is equal to 'Html Elements'
        cy.get('#main_heading').should('have.text', 'Html Elements')

        // This assertion checks if the subjected elements visible text is contains 'Html Elements'
        cy.get('#main_heading').should('contain.text', 'Elements')
        cy.get('#main_heading').should('include.text', 'Elements')

        
        cy.url().should('eq', 'https://techglobal-training.com/frontend/html-elements')
        cy.title().should('eq', 'TechGlobal Training | Html Elements')


        // have.attr chainer checks the elements attribute property
        // it can get 2, or 3 arguments, we can validate if element has specific attribute, and the value of it
        cy.get('#main_heading').should('have.attr', 'id')
        cy.get('#main_heading').should('have.attr', 'id', 'main_heading')
        cy.get('#facebook_link').should('have.attr', 'href', 'https://www.facebook.com/techglobaleducation')


        // 'have.length' validates how many web elements our locator returns
        cy.get('[id*="paragraph"]').should('have.length', 2)
        cy.get('#hello_paragraph').should('have.length', 1)


        // be.enabled checks if the web element is interactable
        cy.get('#checkbox_1').should('be.enabled')

        // be.checked checks if the web element is checked
        cy.get('#checkbox_1').should('not.be.checked')

        // have.css validates the css property and its value in css
        cy.get('[id*="paragraph"]').should('have.css', 'color', 'rgb(105, 105, 105)')
        cy.get('[id*="paragraph"]').should('have.css', 'padding', '0px')



        // cy.get('#hello_paragraph').should('have.text', 'Hello World!')
        // cy.get('#hello_paragraph').should('have.attr', 'id', 'hello_paragraph')
        // cy.get('#hello_paragraph').should('be.visible')

        
        cy.get('#hello_paragraph').should('have.text', 'Hello World!')
        .and('have.attr', 'id', 'hello_paragraph')
        .and('be.visible')



      



    })
})


        /**
         * 1. On the Html Elements page
         * 2. From the "Headings" section, locate both "Programming Languages" and "Automation Tools" web elements
         * 3. Validate their texts with expected text
         * 4. Validate these elements are visible.
         */

        describe('Cypress Assertions', () => {

            it('Default Assertions', () => {

                cy.visit( cy.visit('https://techglobal-training.com/frontend'))
                cy.get('.cards').contains('Html Elements').click()

                cy.contains('Checkboxes').nextAll().as('checkboxElements')

                const checkboxText = ['Apple', 'Microsoft', 'Tesla']

                cy.get('@checkboxElements').each(($el, index) => {
                    expect($el.text()).to.equal(checkboxText[index])
                    expect($el).to.be.visible 
                }

                )


              })
        })

