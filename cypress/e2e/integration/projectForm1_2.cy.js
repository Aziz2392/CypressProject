const test = [
    {
        description: 'Address input box validation' ,
        label: 'Address' ,
        placeholder: 'Enter your address',
        required: false
    } ,
    {
        description: 'Email input box validation' ,
        label: 'Email *' ,
        placeholder: 'Enter your email',
        required: false
    } ,
    {
        description: 'Phone input box validation' ,
        label: 'Phone' ,
        placeholder: 'Enter your phone number',
        required: false
    },
    {
        description: 'Message input box validation' ,
        label: 'Message' ,
        placeholder: 'Type your message here...',
        required: false
    }
]


    test.forEach((test, index) => {

        it(`Test Case 0${index + 4} - ${test.description}`, () => {

            cy.visit('https://techglobal-training.com/frontend/project-1')   

            cy.contains('.label', test.label).should('have.text', test.label)

            cy.contains('.label', test.label).parent().find('input, textarea').should('be.visible')
            .and(test.required ? 'have.attr' : 'not.have.attr', 'requried')
            
            
            

        })


    })