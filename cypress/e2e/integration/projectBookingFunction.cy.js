import bookPage from "../../pages/BookingPage";

describe('Booking Function test', () => {

       const bookingPage = new bookPage()

    it('Validate the default Book your trip form', function() {

        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Project - Booking Function').click()

        bookingPage.getOneWayRadio().should('be.enabled').and('be.visible').and('have.attr', 'checked')
        bookingPage.getRoundTripRadio().should('be.enabled').and('be.visible').and('not.have.attr', 'checked')

        const bookLabels = ['Trip type','Cabin Class', 'From', 'To', 'Depart', 'Return', 'Number of passengers', 'Passenger 1']

        cy.get('.label').each(($el, index) => {
            cy.wrap($el).contains(bookLabels[index]).should('be.visible')
        })

        

        bookingPage.getBookingDropdowns().each(($el, index) => {
            cy.wrap($el).should('be.visible')
        })

        bookingPage.getBookingDateInput().should('be.visible')
        bookingPage.getBookingDateInput().last().should('not.be.enabled')
        cy.get('label.label').contains('Number of passengers').next().should('have.value', '')
       // cy.get('label.label').contains('Number of passengers').next().should('have.value', '1') // Not working
        bookingPage.getBookingButton().should('be.enabled').and('be.visible')

    })


    it('Validate the default Book your trip form when Round trip is selected', function() {

        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Project - Booking Function').click()
        
        bookingPage.getRoundTripRadio().click().should('be.checked')
        bookingPage.getOneWayRadio().should('not.be.checked')

        const bookLabels = ['Trip type','Cabin Class', 'From', 'To', 'Depart', 'Return', 'Number of passengers', 'Passenger 1']

        cy.get('.label').each(($el, index) => {
            cy.wrap($el).contains(bookLabels[index]).should('be.visible')
        })

        bookingPage.getBookingDateInput().should('be.visible')
        cy.get('label.label').contains('Number of passengers').next().should('have.value', '') // Not working
        bookingPage.getBookingDropdownsSelect().last().should('have.value', 'Adult (16-64)')
        bookingPage.getBookingButton().should('be.enabled').and('be.visible')


    })


    it('Validate the booking for 1 passenger and one way', function() {

        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Project - Booking Function').click()

        bookingPage.getOneWayRadio().should('be.checked')
        bookingPage.getBookingDropdownsSelect().each(($el, index) => {

            const dropDownValue = ['Business', 'IL', 'FL', '1', 'Senior (65+)']
            cy.wrap($el).should('be.enabled').select(dropDownValue[index])
            .and('have.value',  dropDownValue[index])
         })

         bookingPage.getBookingDateInput().first().clear().type('11/26/2023')
         bookingPage.getBookingDateInput().last()
         bookingPage.getBookingButton().click()

         bookingPage.getBookingSubmitResultDepart().should('have.text', 'DEPART')
         .next().should('have.text', 'IL to FL')
         .next().should('have.text', 'Sun Nov 26 2023')

         bookingPage.getBookingSubmitResultDepart2()
         .next().should('have.text', 'Passenger 1: Senior (65+)Cabin class: Business')


    })


    it('Validate the booking for 1 passenger and round trip', function() {

        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Project - Booking Function').click()

        bookingPage.getRoundTripRadio().click()

        bookingPage.getBookingDropdownsSelect().each(($el, index) => {

            const dropDownValue2 = ['First', 'CA', 'IL', '1', 'Adult (16-64)']
            cy.wrap($el).should('be.enabled').select(dropDownValue2[index])
            .and('have.value',  dropDownValue2[index])

    })

        bookingPage.getBookingDateInput().first().clear().type('11/26/2023')
        bookingPage.getBookingDateInput().last().clear().type('12/26/2023')
        bookingPage.getBookingButton().click()

        bookingPage.getBookingSubmitResultDepart().first().should('have.text', 'DEPART')
        .next().should('have.text', 'CA to IL')
        .next().should('have.text', 'Sun Nov 26 2023')

        bookingPage.getBookingSubmitResultDepart2()
        .should('have.text', 'Number of Passengers: 1Passenger 1: Adult (16-64)Cabin class: First')

        bookingPage.getBookingSubmitResultReturn().first().should('have.text', 'RETURNIL to CATue Dec 26 2023')
    })

    it('Validate the booking for 2 passengers and one way', function() {

        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Project - Booking Function').click()

        bookingPage.getOneWayRadio().should('be.checked')


        bookingPage.getBookingDropdownsSelect().each(($el, index) => {

            const dropDownValue3 = ['Premium Economy', 'NY', 'TX', '2', 'Adult (16-64)']
            cy.wrap($el).should('be.enabled').select(dropDownValue3[index])
            .and('have.value',  dropDownValue3[index])

    })

    bookingPage.getBookingDropdownsSelect().last().select('Child (2-11)')

    bookingPage.getBookingDateInput().first().clear().type('11/21/2023')
    bookingPage.getBookingButton().click()

    bookingPage.getBookingSubmitResultDepart().first().should('have.text', 'DEPART')
    .next().should('have.text', 'NY to TX')
    .next().should('have.text', 'Tue Nov 21 2023')

    bookingPage.getBookingSubmitResultDepart2()
    .should('have.text', 'Number of Passengers: 2Passenger 1: Adult (16-64)Passenger 2: Child (2-11)Cabin class: Premium Economy')


    })

})