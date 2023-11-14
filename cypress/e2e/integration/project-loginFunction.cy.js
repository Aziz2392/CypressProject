import LoginPage from "../../pages/LoginPage";

describe('Login form test', () => {

    const loginPage = new LoginPage()

    it('Validate the login form', function() {

        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Project - Login Function').click()
        
        loginPage.getLoginTitles().first().should('have.text', 'Please enter your username')
        loginPage.getLoginTitles().last().should('have.text', 'Please enter your password')
        loginPage.getUsernameField().should('be.visible').and('not.have.attr', 'required')
        loginPage.getPasswordField().should('be.visible').and('not.have.attr', 'required')
        loginPage.getLoginButton().should('be.visible').and('be.enabled').and('have.text', 'LOGIN').next().should('be.visible')
        .and('have.text', 'Forgot Password?')
        // Should be clickable???
        
    })
     
    it('Validate the valid login', function() {


        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Project - Login Function').click()

        loginPage.userLogin('TechGlobal', 'Test1234')
        loginPage.getSuccessMessage().should('have.text', 'You are logged in').next().should('have.text', 'LOGOUT')

    })

    it('Validate the logout', function() {


        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Project - Login Function').click()

        loginPage.userLogin('TechGlobal', 'Test1234')
        loginPage.getSuccessMessage().next().click()
        cy.get('.mb-5').should('be.visible')

    })

    it('Validate the Forgot Password? Link and Reset Password modal', function() {


        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Project - Login Function').click()

        loginPage.getLoginButton().next().click()
        cy.get('#modal_title').should('have.text', 'Reset Password')
        loginPage.getExitRPButton().should('be.visible')
        cy.get('#email').should('be.enabled')
        cy.get('.modal-card-body > div > form > div > label').should('have.text', `Enter your email address and we'll send you a link to reset your password. `)
        cy.get('#submit').should('be.visible').and('have.text', 'SUBMIT') // clickable??

    })

    it('Validate the Reset Password modal close button', function() {


        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Project - Login Function').click()

        loginPage.getLoginButton().next().click()
        cy.get('#modal_title').should('have.text', 'Reset Password')
        loginPage.getExitRPButton().click()
        cy.get('.mb-5').should('be.visible')

    })

    it('Validate the Reset Password form submission', function() {


        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Project - Login Function').click()

        loginPage.getLoginButton().next().click()
        cy.get('#email').type('aziz.elm92@gmail.com')
        cy.get('#submit').click()
        cy.get('#confirmation_message').should('have.text', 'A link to reset your password has been sent to your email address.')

    })

    it('Validate the invalid login with the empty credentials', function() {


        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Project - Login Function').click()

        loginPage.getLoginButton().click()
        loginPage.getErrorMessage().should('have.text', 'Invalid Username entered!')
    })

    it('Validate the invalid login with the wrong username', function() {


        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Project - Login Function').click()

        loginPage.userLogin('John', 'Test1234')
        loginPage.getLoginButton().click()
        loginPage.getErrorMessage().should('have.text', 'Invalid Username entered!')
    })

    it('Validate the invalid login with the wrong password', function() {


        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Project - Login Function').click()

        loginPage.userLogin('TechGlobal', '1234')
        loginPage.getLoginButton().click()
        loginPage.getErrorMessage().should('have.text', 'Invalid Password entered!')
    })

    it('Validate the invalid login with the wrong username and password', function() {


        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Project - Login Function').click()

        loginPage.userLogin('John', '1234')
        loginPage.getLoginButton().click()
        loginPage.getErrorMessage().should('have.text', 'Invalid Username entered!')
    })
})