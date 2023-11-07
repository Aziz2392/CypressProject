describe('Practices', () => {

    it('Implicit Assertions Practice', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Html Elements').click()


 /**
         * 1. Go to 'https://techglobal-training.com/frontend'
         * 2. Click on the 'Html Elements' card
         * 3. From the Paragraphs heading
         * 4. Validate Hello World and I Like automation testing! texts are visible
         * 5. Validate their texts are equal to expected texts
         * 6. Validate their id and value
         */

        


        cy.get('#testing_paragraph').should('be.visible')
        .and('have.text', "I like automation testing!")
        .and('have.attr', 'id', 'testing_paragraph')
        
///////////////////////////////////////////////////////////////////


        cy.get('#register_button')
        .should('be.visible')
        .and('have.text', "Register")
        .and('be.enabled')
        cy.get('#signin_button')
        .should('be.visible')
        .and('have.text', "Sign in")
        .and('be.enabled')

/////////////////////////////////////////////////////////////////
/*
        cy.get('#ordered_list').should('be.visible').and('have.text', "Ordered Lists")

        cy.get('#ordered_list_item1')
        .should('be.visible')
        .and('have.text', "Cypress")
        .and

        cy.get('#ordered_list_item2')
        .should('be.visible')
        .and('have.text', "Selenium Webdriver")
*/ 

//// Alternate 
        cy.get("#ordered_list")
      .prev()
      .should("be.visible")
      .and("have.text", "Ordered Lists")
      .next()
      .find("#ordered_list_item1")
      .should("be.visible")
      .and("have.text", "Cypress")
      .next()
      .should("be.visible")
      .and("have.text", "Selenium Webdriver");




        //cy.get('#tesing_paragraph').should('have.text', "I like automation testing!");
        //cy.get('#testing_paragraph').should('have.text', 'id', 'testing_paragraph');
        
/**
     * 1. Go to 'https://techglobal-training.com/frontend'
     * 2. Click on the 'Html Elements' card
     * 3. From the "Links" section
     * 4. Validate "Links" heading text is visible and its equal to "Links"
     * 5. Validate "Facebook" and "Instagram" anchor tags are visible
     * 6. Validate "Facebook" and "Instagram" anchor tags are enabled
     * 6. Validate "Facebook" and "Instagram" anchor tags has "href" attribute
     * 6. Validate their texts are equal "Facebook" and "Instagram"
     */
    
/*
cy.get("#facebook_link").prev().should('be.visible').and('have.text', "Links")
    .next()
    .find('#facebook_link').should('be.visible').and('have.attr', 'herf','https://www.facebook.com/techglobaleducation')
    .next()
    .find('#instagram_link').should('be.visible').and('be.enabled').and('have.attr', 'herf', 'https://www.instagram.com/techglobal.school/?hl=en')
*/


cy.get("#ordered_list_item1")
.should("be.visible")
.and("have.text", "Cypress")
.next()
.should("be.visible")
.and("have.text", "Selenium Webdriver");

cy.get("#facebook_link")
.prev()
.should("be.visible")
.and("have.text", "Links");

cy.get("#facebook_link")
.should("be.visible")
.and("have.attr", "href", "https://www.facebook.com/techglobaleducation")
.and("have.text", "Facebook");

cy.get("#facebook_link")
.prev()
.should("be.visible")
.and("have.text", "Links");

cy.get("#instagram_link")
.should("be.visible")
.and(
  "have.attr",
  "href",
  "https://www.instagram.com/techglobal.school/?hl=en"
)
.and("have.text", "Instagram");


 /**
   * 1. Go to 'https://techglobal-training.com/frontend'
   * 2. Click on the 'Html Elements' card
   * 3. From the "Checkboxes" section
   * 4. Validate "Tesla" checkbox text is equal to "Tesla"
   * 5. Validate "Tesla" checkbox is enabled
   * 6. Validate "Tesla" checkbox is not checked
   * 7. Check on "Tesla" checkbox
   * 8. Validate its checked
   */

    cy.get('#tesla_check')
    .should('have.text', 'Tesla')
    .prev()
    .and('be.enabled')
    .and('be.not.checked')
    .check()
    .and('be.checked')
///////////////////////////////////////


    cy.contains('Paragraphs').nextAll().first().should('have.text', 'Hello World!').next().should('have.text', 'I like automation testing!')
     
////////////////////////////




    })
})


it.only('More explicit assertions - Validate Multiple elements', () => {

    cy.visit('https://techglobal-training.com/frontend')
    //cy.clickCard('Html Elements')

    // If we want to validate multiple web elements, normally we would do this.
    cy.get('#hello_paragraph').should('be.visible').and('have.text', 'Hello World!')
    cy.get('#testing_paragraph').should('be.visible').and('have.text', 'I like automation testing!')

    // Or, we can locate the above elements in a single locator that we need to validate
    cy.contains('Paragraphs').nextAll().as('paragraphHeader')

    // By indexing, we can validate these elements using eq(), first() or last()
    cy.get('@paragraphHeader').first().should('have.text','Hello World!')
    cy.get('@paragraphHeader').last().should('have.text','I like automation testing!')

    cy.get('@paragraphHeader').first().should("have.text","Hello World!").next().should("have.text","I like automation testing!")

    const arr = ['Hello World!', 'I like automation testing!']

    // And we can loop through using fori loop by their index - NOT A PREFERRED WAY
    for(let i = 0; i < arr.length; i++){
        cy.get('@paragraphHeader').eq(i).should("have.text",arr[i])
    }

    // We can assert these using each() and validate using explicit assertion
    cy.get('@paragraphHeader').each(($el, index) => {
        cy.log($el.text())
        expect($el.text()).to.equal(arr[index])
    }) })