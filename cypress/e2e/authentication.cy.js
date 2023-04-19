import { navLinks, validationErrors, auth } from '../fixtures/selectors.json'
import { loginErrors } from '../fixtures/errors.json'
import { testUser } from '../fixtures/testUser.json'

describe('Login and Logout', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Login renders correctly', () => {
        cy.get(navLinks.login).click()
        cy.get(auth.usernameField).should('exist')
        cy.get(auth.passwordField).should('exist')
        cy.get(auth.loginBtn).should('exist')        
    })

    it('Entering blank credentials returns error message', () => {
        cy.get(navLinks.login).click()
        cy.get(auth.loginBtn).click()
        cy.get(validationErrors).children().should(($error) => {
            expect($error.eq(0)).to.contain(loginErrors)
        })
    })

    it('Entering incorrect credentials returns error message', () => {
        cy.get(navLinks.login).click()
        cy.get(auth.usernameField).type('IncorrectUser')
        cy.get(auth.passwordField).type('IncorrectPassword')
        cy.get(auth.loginBtn).click()
        cy.get(validationErrors).children().should(($error) => {
            expect($error.eq(0)).to.contain(loginErrors)
        })
    })

    it('Entering correct credentials logs user in and navigates to calendar', () => {
        cy.login(testUser.username, testUser.password)
        cy.url().should('include', 'calendar')
        cy.logout()
    })

    it('Logging in updates greeting in navbar', () => {
        cy.login(testUser.username, testUser.password)
        cy.get(navLinks.greeting).contains(testUser.username)
        cy.logout()
    })

    it('Logout logs user out', () => {
        cy.login(testUser.username, testUser.password)
        cy.logout()
        cy.get(navLinks.register).should('exist')
    })
})