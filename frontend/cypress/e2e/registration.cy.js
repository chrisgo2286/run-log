describe('Registration', () => {
    it('User can register new account', () => {
        cy.visit('/')
        cy.get('a[data-cy="register-link"]').click()
        cy.url().should('include','register')
        cy.get('input[data-cy="username-field"]').type('new_user')
        cy.get('input[data-cy="password1-field"]').type('testcase123')
        cy.get('input[data-cy="password2-field"]').type('testcase123')
        cy.get('button[data-cy="register-btn"]').click()
    });
})
