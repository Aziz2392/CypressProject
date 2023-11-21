import TablesPage from "../../pages/TablesPage";
 /**
   * TEST CASE 1
   * Verify the headers of the table
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Tables" card
   * Validate the headers of the table are "Rank", "Company", "Employees", and "Country"
   */


describe('Static Tables', () => {

    beforeEach(() => {
        cy.fixture('example').then(function(data) {
            this.headers
        })
    })

    const tablesPage= new TablesPage()

    it('Verify the headers of the table', function()  {


       

        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Tables').click()

        tablesPage.getCompanyTableHeaders().find('th').first().should('have.text', 'Rank')
        .next().should('have.text' , 'Company')
        .next().should('have.text', 'Employees')
        .next().should('have.text', 'Country')

       

        tablesPage.getCompanyTableHeaders().find('th').each(($el, index) => {
            cy.wrap($el).should('have.text', this.headers[index])
            
        })
    })


})


