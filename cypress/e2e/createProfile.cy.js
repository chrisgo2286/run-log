import { testUser } from '../fixtures/testUser.json'
import { createProfile, validationErrors } from '../fixtures/selectors.json'
import { createProfileErrors } from '../fixtures/errors.json'

describe('CreateProfile page', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('create_profile')
    })

    it('Correct fields are rendered', () => {
        cy.get(createProfile.ageField).should('exist')
        cy.get(createProfile.genderField).should('exist')
        cy.get(createProfile.emailField).should('exist')
        cy.get(createProfile.preferenceField).should('exist')
        cy.get(createProfile.historyField).should('exist')
        cy.get(createProfile.descriptionField).should('exist')
        cy.get(createProfile.togglePrivacy).should('exist')
        cy.get(createProfile.submitButton).should('exist')
    })

    it('Clicking privacy toggle switches to Public', () => {
        cy.get(createProfile.togglePrivacy).click()
        cy.contains(createProfile.privacy, 'Public')
    })

    it('Validation functions correctly', () => {
        cy.get(createProfile.ageField).type('38X')
        cy.get(createProfile.emailField).type('chrisgo2286yahoo.com')
        cy.get(createProfile.submitButton).click()
        cy.get(validationErrors).children().should(($error) => {
            expect($error.eq(0)).to.contain(createProfileErrors.age)
            expect($error.eq(1)).to.contain(createProfileErrors.gender)
            expect($error.eq(2)).to.contain(createProfileErrors.email)
        })
    })

    it('Submitting data navigates to UserProfile; shows correct data', () => {
        cy.interceptPostProfile()
        cy.interceptGetUserProfile()
        cy.get(createProfile.ageField).type(testUser.age)
        cy.get(createProfile.genderField).select(testUser.gender)
        cy.get(createProfile.emailField).type(testUser.email)
        cy.get(createProfile.submitButton).click()
        cy.url().should('include', 'user_profile')
    })
})