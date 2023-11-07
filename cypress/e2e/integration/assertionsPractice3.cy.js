
/*
* 1. Go to https://techglobal-training.com/frontend
* 2. Navigate to 'Html Elements' card
* 3. From the "Text Inputs" section
* 4. Validate text input 1 and text input 2 is enabled
* 5. Validate text input 1 and text input 2 is is not required
* 6. Enter your name and last name
*/



describe('Cypress Assertions', () => {

    it('Default Assertions', () => {
        
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Html Elements').click()
/*
        cy.get('#text_input1').should('be.enabled').type('Aziz').should('not.have.attr', 'required')

        cy.get('#text_input2').should('be.enabled').type('Elmahboub').should('not.have.attr', 'required')
        */
        cy.contains('Text Inputs').parent().find('input').as('textInputs')

        const names = ['Aziz', 'Elmahboub']

        cy.get('@textInputs').each(($el, index) => {
            cy.wrap($el).type(names[index]).should('be.enabled').and('not.have.attr', 'required')
        })

           /**
     * 1. Go to https://techglobal-training.com/frontend
     * 2. Navigate to 'Html Elements' card
     * 3. From the "Date Inputs" section
     * 4. Validate date input 1 and date input 2 is enabled
     * 5. Validate date input 1 and date input 2 is is not required
     * 6. Enter dates for both date input 1 and date input 2
     * 7. Validate value is changed to given dates.
     */
        cy.contains('Date Inputs').parent().find('input').as('dateInputs')

        const dates = ['10/31/2023', '11/10/2023']

        cy.get('@dateInputs').each(($el, index) => {
            cy.wrap($el).clear().type(dates[index]).should('be.enabled').and('not.have.attr', 'required')
            cy.wrap($el).should('have.attr', 'value', dates[index])
        })

         /**
     * 1. Go to https://techglobal-training.com/frontend
     * 2. Navigate to 'Html Elements' card
     * 3. From the "Dropdowns" section
     * 4. Validate dropdown 1 and dropdown 2 is enabled
     * 6. Enter Microsoft for dropdown 1 and Apple for dropdown 2
     * 7. Validate options are selected
     */

         cy.contains('Dropdowns').parent().find('select').as('dropDown')

         cy.get('@dropDown').each(($el, index) => {

         
            const dropDownValue = ['Microsoft', 'Apple']
            cy.wrap($el).should('be.enabled').select(dropDownValue[index])
            .and('have.value',  dropDownValue[index])
         })

    
    })
})