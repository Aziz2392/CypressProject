class LoginPage {
    getUsernameField(){
        return cy.get('#username')
    }

    getPasswordField(){
        return cy.get('#password')
    }

    getLoginButton(){
        return cy.get('#login_btn')
    }

    getSuccessMessage(){
        return cy.get('#success_lgn')
    }

    getLoginTitles(){
        return cy.get('form > div > label')
    }

    getErrorMessage(){
        return cy.get('#error_message')
    }

    getExitRPButton(){
        return cy.get('.delete')
    }

    userLogin(username, password){
        this.getUsernameField().type(username)
        this.getPasswordField().type(password)
        this.getLoginButton().click()
    }



}


export default LoginPage

