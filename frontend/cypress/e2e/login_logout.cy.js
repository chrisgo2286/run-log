describe('Login and Logout', () => {
    it('User can log in and log off application', () => {
        cy.login()
        cy.url().should('include','calendar')
        cy.get('div[data-cy="greeting"]').contains('Hi tester')
        cy.logout()
        cy.get('div[data-cy="home"]')
    });
});