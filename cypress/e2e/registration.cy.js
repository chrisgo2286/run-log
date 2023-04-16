import { newUser } from '../fixtures/testUser.json';

describe('Registration', () => {
    it('User can register new account', () => {
        cy.interceptPostRegistration()
        cy.interceptGetCalendar()          
        cy.visit('/')
        cy.get('a[data-cy="register-link"]').click()
        cy.url().should('include', 'register')
        cy.get('input[data-cy="username-field"]').type(newUser.username)
        cy.get('input[data-cy="password1-field"]').type(newUser.password)
        cy.get('input[data-cy="password2-field"]').type(newUser.password)
        cy.get('div[data-cy="register-btn"]').click()
        cy.url().should('include', 'calendar')
    });
})
