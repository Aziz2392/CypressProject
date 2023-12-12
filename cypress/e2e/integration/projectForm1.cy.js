
/// Project 1
////


//// Test Case 1 - validate the Contact Us information


describe('Project 1 Test Case 1', () => {

    it('Contact Us validation', () => {


        cy.visit('https://techglobal-training.com/frontend/project-1')
        cy.get('.mb-5 > h1').should('have.text', 'Contact Us')
    // Exdpected to have 'Contact us'

        cy.get('.mb-5 > #address').should('have.text', '2860 S River Rd Suite 480, Des Plaines, IL 60018')
        cy.get('.mb-5 > #email').should('have.text', 'info@techglobalschool.com')
        cy.get('.mb-5 > #phone-number').should('have.text', '(773) 257-3010')

    })
})




//// Test Case 2 - Validate the Full name iput box

describe('Project 1 Test Case 2', () => {

    it('Full Name validation', () => {

        cy.visit('https://techglobal-training.com/frontend/project-1')
        cy.get('.control .input').first('').should('be.visible').and('have.attr', 'required')
        cy.get('.field > label').first('').should('have.text', 'Full name *')
        cy.get('.control .input').first('').should('have.attr', 'placeholder', 'Enter your full name')
        

    })
})


//// Test Case 3 - Validate the Gender radio button (incomplete)

describe('Project 1 Test Case 3', () => {

    it('Gender radio button validation', () => {
        cy.visit('https://techglobal-training.com/frontend/project-1')

        cy.get('.control .label').should('have.text', 'Gender *')
        cy.get('.mr-1').should('have.attr', 'required')
        cy.get('.control > label .mr-1').should('be.enabled')
        
        //// Names of gender are present
        cy.get('.control > label .mr-1').each(($el, index) => {
            
            const genders = ['Male', 'Female','Prefer not to disclose']
            cy.wrap($el).should('be.enabled').and('be.visible')

            /// Clickable
            cy.get('.control > .label + label :first-child').should('be.enabled').and('not.be.checked')
            cy.get('.control > .label + label + label :first-child').should('be.enabled')
            cy.get('.control > .label + label + label + label :first-child').should('be.enabled').and('not.be.checked')

            cy.get('.control > .label + label :first-child').click().should('be.checked')
            cy.get('.control > .label + label + label :first-child').should('not.be.checked')
            cy.get('.control > .label + label + label + label :first-child').should('not.be.checked')
        
            // Validate Female Option
            cy.get('.control > .label + label + label :first-child').click().should('be.checked')
            cy.get('.control > .label + label :first-child').should('not.be.checked')
            cy.get('.control > .label + label + label + label :first-child').should('not.be.checked')
            
        })
      
    })

    })

    
////  Test Case 4 - Validate the Address input box


    describe('Project 1 Test Case 4', () => {

        it('Address input box validation', () => {

            cy.visit('https://techglobal-training.com/frontend/project-1')   
            
            cy.get('input.input[placeholder="Enter your address"]')
            .should('be.enabled').and('be.visible').and('not.have.attr', 'required')

            cy.get('label.label').contains('Address').should('have.text', 'Address')

            cy.get('input.input[placeholder="Enter your address"]').should('have.attr', 'placeholder', 'Enter your address')
            

        })


    })


///// Test Case 5 Validate the Email input box


    describe('Project 1 Test Case 5', () => {

        it('Email input box validation', () => {
        cy.visit('https://techglobal-training.com/frontend/project-1')  


        cy.get('input.input[placeholder="Enter your email"]')
        .should('be.enabled').and('be.visible').and('have.attr', 'required')
        
        cy.get('.label').contains('Email *').should('have.text', 'Email *')
        cy.get('input.input[placeholder="Enter your email"]').should('have.attr', 'placeholder', 'Enter your email')

        })


    })



    /*
      describe('Project 1 Test Case 4', () => {

        it('Address input box validation', () => {
        cy.visit('https://techglobal-training.com/frontend/project-1')  



        })


    })

    */

    ///// Test Case 6 Validate the Phone input box
 
      describe('Project 1 Test Case 6', () => {

        it('Phone input box validation', () => {
        cy.visit('https://techglobal-training.com/frontend/project-1')  

        cy.get('input.input[placeholder="Enter your phone number"]')
        .should('be.enabled').and('be.visible').and('not.have.attr', 'required')

        cy.get('.label').contains('Phone').should('have.text', 'Phone')    
        cy.get('input.input[placeholder="Enter your phone number"]').should('have.attr', 'placeholder', 'Enter your phone number')

        })


    })


    //// Test Case 7 - Validate the message text area



    describe('Project 1 Test Case 7', () => {

        it('Message input box validation', () => {
        cy.visit('https://techglobal-training.com/frontend/project-1')  


        cy.get('textarea.textarea[placeholder="Type your message here..."]')
        .should('be.enabled').and('be.visible').and('not.have.attr', 'required')

        cy.get('.label').contains('Message').should('have.text', 'Message') 
        cy.get('textarea.textarea[placeholder="Type your message here..."]').should('have.attr', 'placeholder', 'Type your message here...')
        


        })


    })


///// Test Case 8 (incomplete)




    describe('Project 1 Test Case 8', () => {

        it('Address input box validation', () => {
        cy.visit('https://techglobal-training.com/frontend/project-1')  
        cy.get('.checkbox').should('have.text', ' I give my consent to be contacted.')
        cy.get('.checkbox > input').should('have.attr', 'required')
        cy.get('.checkbox > input').should('be.enabled')
        cy.get('.checkbox > input').check().should('be.checked').uncheck().should('not.be.checked')


        })


    })



    ///////// Tes Case 9 - Validate the form submission (a little incomplete)

    describe('Project 1 Test Case 9', () => {

        it('Address input box validation', () => {
        cy.visit('https://techglobal-training.com/frontend/project-1')  
        
        
        cy.get('button.button[type="submit"]')
        .should('be.enabled').and('be.visible').and('have.text', 'SUBMIT')

     
        cy.get('button.button[type="submit"]')
        .invoke('attr', 'aria-disabled')
        .then((ariaDisabled) => {
         
          cy.log(`ariaDisabled is ${ariaDisabled}`);
          if (ariaDisabled !== "true") {
            cy.log('Button exists and is disabled!')
            return
          }
          cy.log('Button exists and is enabled!')
          cy.get('button.button[type="submit"]').click();
        });

        cy.log('Button exists and is enabled!')
   


        })


    })


    //// Test Case 10 - Validate the form submssion (incomplete)

    describe('Project 1 Test Case 10', () => {

        it('Form submission validation', () => {
        cy.visit('https://techglobal-training.com/frontend/project-1')  
        
        cy.get('input.input[placeholder="Enter your full name"]').type('Aziz Elmahboub')
        cy.get('input.mr-1').first().check()
        cy.get('input.input[placeholder="Enter your address"]').type('111 tech global dr., Chicago IL 30455')
        cy.get('input.input[placeholder="Enter your email"]').type('azizelm@gamil.com')
        cy.get('input.input[placeholder="Enter your phone number"]').type('312-333-4444')
        cy.get('textarea.textarea[placeholder="Type your message here..."]').type('Thanks for watching my first automation project')
        cy.get('.checkbox > input').check().should('be.checked')
        cy.get('button.button[type="submit"]').realClick()

        Cypress.on('uncaught:exception', () => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })



        cy.get('strong.mt-5').should('have.text', 'Thanks for submitting!')


        })


    })