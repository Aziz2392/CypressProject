describe('Timeouts', () => {

    it('Explicit or Inline Timeouts', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Html Elements').click()


        //cy.get('#randomName', {timout: 8000})
        cy.get('#main_heading', {timeout: 10000})

        cy.get('#hello_paragraph', {timeout: 10000}).click({timeout: 7000, force: true})

    })

  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Waits" card
   * Click on the "Click on me to see a red box" button
   * Validate that a red box is displayed
   * 
   */

    it('Waits', () => {
        cy.visit('https://techglobal-training.com/frontend', {timeout: 10000})
        cy.get('.cards').contains('Waits').click()


        cy.get('#red').click()

        cy.get('.box', {timeout: 11000}).should('be.visible')












    })
})


