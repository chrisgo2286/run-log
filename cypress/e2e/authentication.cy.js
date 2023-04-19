import { navLinks, validationErrors } from '../fixtures/selectors.json'
import { loginErrors } from '../fixtures/errors.json'
import { testUser } from '../fixtures/testUser.json'

describe('Login and Logout', () => {
    it('Login renders correctly', () => {
        cy.get(navLinks.login).click()
        cy.get(usernameField).should('exist')
        cy.get(passwordField).should('exist')
        cy.get(loginBtn).should('exist')        
    })

    it('Entering blank credentials returns error message', () => {
        cy.get(navLinks.login).click()
        cy.get(loginBtn).click()
        cy.get(validationErrors).children().should(($error) => {
            expect($error.eq(0)).to.contain(loginErrors)
        })
    })

    it('Entering incorrect credentials returns error message', () => {
        cy.get(navLinks.login).click()
        cy.get(usernameField).type('IncorrectUser')
        cy.get(passwordField).type('IncorrectPassword')
        cy.get(loginBtn).click()
        cy.get(validationErrors).children().should(($error) => {
            expect($error.eq(0)).to.contain(loginErrors)
        })
    })

    it('Entering correct credentials logs user in and navigates to calendar', () => {
        cy.login(testUser.username, testUser.password)
        cy.url().should('include', 'calendar')
    })

    it('Logging in updates greeting in navbar', () => {
        cy.login(testUser.username, testUser.password)
        cy.get(navLinks.greeting).should('include', testUser.username)
    })

    it('Logout logs user out', () => {
        cy.login(testUser.username, testUser.password)
        cy.logout()
        cy.get(navLinks.register).should('exist')
    })
})