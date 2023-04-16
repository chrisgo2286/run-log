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
import { testUser, testUser2 } from '../fixtures/testUser.json';
import { monthData } from '../fixtures/monthData.json';
import { profileData } from '../fixtures/profileData.json';

Cypress.Commands.add('login', () => {
    cy.visit('/')
    cy.get('a[data-cy="login-link"]').click()
    cy.get('input[data-cy="username-field"]').type(testUser.username)
    cy.get('input[data-cy="password-field"]').type(testUser.password)
    cy.get('div[data-cy="login-btn"]').click()
})

Cypress.Commands.add('login2', () => {
    cy.visit('/')
    cy.get('a[data-cy="login-link"]').click()
    cy.get('input[data-cy="username-field"]').type(testUser2.username)
    cy.get('input[data-cy="password-field"]').type(testUser2.password)
    cy.get('div[data-cy="login-btn"]').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('div[data-cy="logout-link"]').click()
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
    cy.intercept('GET', 'api/calendar/', { fixture: monthData })
})

Cypress.Commands.add('interceptGetUserProfile', () => {
    cy.intercept('GET', 'api/profiles/', { fixture: profileData })
})

Cypress.Commands.add('interceptPatchUserProfile', () => {
    cy.intercept('PATCH', 'api/profiles/*', { statusCode: 201 })
})