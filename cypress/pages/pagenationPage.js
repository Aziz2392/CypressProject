class PagenationPage {

    getPagenationHeading(){
       return cy.get('.mb-5 > h1')
    }
    
    getPagenationSubHeading(){
        return cy.get('#sub_heading')
    }
    
    getPagenationContent(){
        return cy.get('#content')
    }
    
    getPreviousButton(){
        return cy.get('#previous')
    }
    
    getNextButton(){
        return cy.get('#next')
    }
    
    clickNextButton(){
        this.getNextButton().click()
    }
    
    getCityInfo(){
        return cy.get('.city_info')
    }
    
    getCountryInfo(){
        return cy.get('.country_info')
    }
    
    getPopulationInfo(){
        return cy.get('.population_info')
    }
    
    
    
    
    }

    export default PagenationPage 

    
