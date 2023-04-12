const username = 'tester2'
const password = 'testcase123'

describe('Registration', () => {
    it('User can register new account', () => {
        cy.intercept('POST', 'api/accounts/registration/', {
            statusCode: 201 
          }),
          
        cy.visit('/')
        cy.get('a[data-cy="register-link"]').click()
        cy.url().should('include','register')
        cy.get('input[data-cy="username-field"]').type(username)
        cy.get('input[data-cy="password1-field"]').type(password)
        cy.get('input[data-cy="password2-field"]').type(password)
        cy.get('div[data-cy="register-btn"]').click()
    });
})
