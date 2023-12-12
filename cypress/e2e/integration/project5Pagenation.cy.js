import PagenationPage from "../../pages/pagenationPage"


describe('Project 1 Test Case 1', () => {


const pagenationPage = new PagenationPage()

it('Pagenation heading/text test', () => {

    cy.visit('https://techglobal-training.com/frontend/project-5')
    
    pagenationPage.getPagenationHeading().should('have.text', 'Pagination')
    pagenationPage.getPagenationSubHeading().should('have.text', 'World City Populations 2022')
    pagenationPage.getPagenationContent().should('have.text', 'What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:')

})

it('Validate the Pagination Next/Previous buttons', () => {

    cy.visit('https://techglobal-training.com/frontend/project-5')


    pagenationPage.getPreviousButton().should('be.visible').and('have.attr', 'disabled')
    pagenationPage.getNextButton().should('be.enabled')

    pagenationPage.clickNextButton()
    pagenationPage.getPreviousButton().should('be.enabled')
    pagenationPage.clickNextButton()
    pagenationPage.clickNextButton()
    pagenationPage.clickNextButton()

    pagenationPage.getPreviousButton().should('be.enabled')
    pagenationPage.getNextButton().should('not.be.enabled')


})

it('Validate the Pagination Cities content', () => {

    cy.visit('https://techglobal-training.com/frontend/project-5')

    pagenationPage.getCityInfo().contains('Tokyo')
    pagenationPage.getCountryInfo().contains('Japan')
    pagenationPage.getPopulationInfo().contains('37,435,191')

    pagenationPage.clickNextButton()

    pagenationPage.getCityInfo().contains('Delhi')
    pagenationPage.getCountryInfo().contains('India')
    pagenationPage.getPopulationInfo().contains('29,399,141')

    pagenationPage.clickNextButton()

    pagenationPage.getCityInfo().contains('Shangai')
    pagenationPage.getCountryInfo().contains('China')
    pagenationPage.getPopulationInfo().contains('26,317,104')

    pagenationPage.clickNextButton()

    pagenationPage.getCityInfo().contains('Sao Paulo')
    pagenationPage.getCountryInfo().contains('Brasil')
    pagenationPage.getPopulationInfo().contains('21,846,507')

    pagenationPage.clickNextButton()

    pagenationPage.getCityInfo().contains('Mexico City')
    pagenationPage.getCountryInfo().contains('Mexico')
    pagenationPage.getPopulationInfo().contains('21,671,908')
})


})