// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { navLinks, auth } from '../fixtures/selectors.json'

Cypress.Commands.add('login', (username, password) => {
    cy.visit('/')
    cy.get(navLinks.login).click()
    cy.get(auth.usernameField).type(username)
    cy.get(auth.passwordField).type(password)
    cy.get(auth.loginBtn).click()
})

Cypress.Commands.add('logout', () => {
    cy.get(navLinks.logout).click()
})

Cypress.Commands.add('interceptPostProfile', () => {
    cy.intercept('POST', 'api/profiles/', {
        statusCode: 201
    })
})

Cypress.Commands.add('interceptPostRegistration', () => {
    cy.intercept('POST', 'api/accounts/registration/', {
        statusCode: 201 
    })
})

Cypress.Commands.add('interceptGetCalendar', () => {
    cy.intercept('GET', 'api/calendar/', { fixture: 'monthData.json' })
})

Cypress.Commands.add('interceptGetUserProfile', () => {
    cy.intercept('GET', 'api/profiles/', { fixture: 'profileData.json' })
})

Cypress.Commands.add('interceptPatchUserProfile', () => {
    cy.intercept('PATCH', 'api/profiles/*', { statusCode: 201 })
})