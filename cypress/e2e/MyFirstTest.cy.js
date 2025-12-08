
describe('My first Test suite', () => {

    it('verify title', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should('eq', 'OrangeHRM');
    })
})