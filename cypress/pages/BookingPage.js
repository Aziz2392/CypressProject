class bookPage {

    getOneWayRadio(){
        return cy.get('.mr-1').first()
    }
    getRoundTripRadio(){
        return cy.get('.mr-1').last()
    }
    getBookingLabels(){
        return cy.get('.label').next()
    }

    getBookingDropdowns(){
        return cy.get('.select')
    }

    getBookingDropdownsSelect(){
        return cy.get('.select > select')
    }

    getBookingDateInput(){
        return cy.get('div.react-datepicker__input-container')
    }
    getBookingButton(){
        return cy.get('button.Button_c_button__TmkRS.null')
    }

    getBookingDateInput(){
        return cy.get('input[placeholder="MM/DD/YY"]')
    }

    getBookingSubmitResultDepart(){
        return cy.get('h1.is-underlined')
    }

    getBookingSubmitResultReturn(){
        return cy.get('.ml')
    }

    getBookingSubmitResultDepart2(){
        return cy.get('.mt-4.is-family-monospace.has-text-black > p')
    }



}export default bookPage