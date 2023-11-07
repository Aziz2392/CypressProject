        /**
         * 1. On the Html Elements page
         * 2. From the "Checkboxes" section, locate all checkboxes
         * 3. Validate their texts with expected text
         * 4. Validate checkboxes are visible, and enabled
         */

describe('Cypress Assertions', () => {

    it('Default Assertions', () => {

        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Html Elements').click()

       // cy.contains('Checkboxes').nextAll().as('checkboxElements')

        const checkboxText = ['Apple', 'Microsoft', 'Tesla']
        const radioButtonText = ['Java', 'JavaScript', 'C#']

        cy.get('#checkbox-button-group > div').each(($el, index) => {
            cy.wrap($el).find('label').should('have.text', checkboxText[index])
            cy.wrap($el).find('input').should('be.visible').and('be.enabled')


            cy.get('#radio-button-group > div').each(($el, index) => {
                cy.wrap($el).find('label').should('have.text', radioButtonText[index])
                cy.wrap($el).find('label > input').should('be.visible').and('be.enabled')
            }

            )








        }

        )

        //cy.get('@checkboxElements').each(($el, index) => {


            //expect($el.text()).to.equal(checkboxText[index])
          //  expect($el).to.be.visible 
        }

        )


      })


