import { testUser } from '../fixtures/testUser.json'
import { selectors } from '../fixtures/selectors.json'
import { errors } from '../fixtures/errors.json'

describe('CreateProfile page', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('create_profile')
    })

    it('Correct fields are rendered', () => {
        cy.get(selectors.ageField).should('exist')
        cy.get(selectors.genderField).should('exist')
        cy.get(selectors.emailField).should('exist')
        cy.get(selectors.preferenceField).should('exist')
        cy.get(selectors.historyField).should('exist')
        cy.get(selectors.descriptionField).should('exist')
        cy.get(selectors.togglePrivacy).should('exist')
        cy.get(selectors.submitButton).should('exist')
    })

    it('Clicking privacy toggle switches to Public', () => {
        cy.get(selectors.togglePrivacy).click()
        cy.contains(selectors.privacy, 'Public')
    })

    it('Validation functions correctly', () => {
        cy.get(selectors.ageField).type('38X')
        cy.get(selectors.emailField).type('chrisgo2286yahoo.com')
        cy.get(selectors.submitButton).click()
        cy.get(selectors.validationErrors).children().should(($error) => {
            expect($error.eq(0)).to.contain(errors.ageError)
            expect($error.eq(1)).to.contain(errors.genderError)
            expect($error.eq(2)).to.contain(errors.emailError)
        })
    })

    it('Submitting data navigates to UserProfile; shows correct data', () => {
        cy.interceptPostProfile()
        cy.interceptGetUserProfile()
        cy.get(selectors.ageField).type(testUser.age)
        cy.get(selectors.genderField).select(testUser.gender)
        cy.get(selectors.emailField).type(testUser.email)
        cy.get(selectors.submitButton).click()
        cy.url().should('include', 'user_profile')
    })
})