
describe('Interacting Multiple tabs' , () => {

    it('Multiple tabs', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Multiple Windows').click()

        cy.get('#microsoft').should('have.attr', 'target', '_blank')
        cy.get('#apple').invoke('removeAttr', 'target').click()

        cy.go(-1)
    })

     /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Multiple Windows" card
   * Click on the "Apple" link
   * Validate that the child window title is "Apple"
   * Close the window and switch back to the main window
   * Validate title contains "techglobal"
   */

     it('Multi Tabs - TEST 1', () => {

        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Multiple Windows').click() 
        
        //cy.get('#apple').click()
        
        cy.get('#microsoft').should('have.attr', 'target', '_blank')
        cy.get('#apple').invoke('removeAttr', 'target').click()

        cy.title().should('eq', 'Apple')

        cy.go(-1)

        cy.title().then(($el) => {
            expect($el.toLowerCase()).to.contains('techglobal')
        })

 /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Multiple Windows" card
   * Click on the "Apple" link and validate URL contains "https://www.apple.com/"
   * Click on the "Microsoft" link and validate URL contains "https://www.microsoft.com/en-us/"
   * Click on the "Tesla" link and validate URL contains "https://www.tesla.com/"
   */


 cy.


     })

})

