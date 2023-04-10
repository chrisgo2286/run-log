import axios

//Test that if no profile, create profile page is loaded


const profileUsername = 'div[data-cy="profile-username"]'
const ageField = 'input[data-cy="profile-age"]'
const profileAge = 'div[data-cy="profile-age"]'
const genderField = 'select[data-cy="profile-gender"]'
const profileGender = 'div[data-cy="profile-gender"]'
const emailField = 'input[data-cy="profile-email"]'
const profileEmail = 'div[data-cy="profile-email"]'
const preferenceField = 'textarea[data-cy="profile-preference"]'
const historyField = 'textarea[data-cy="profile-history"]'
const descriptionField = 'textarea[data-cy="profile-description"]'
const togglePrivacy = 'div[data-cy="toggle-button"]'
const privacy = 'div[data-cy="privacy-choice"]'
const submitButton = 'div[data-cy="create-profile-button"]'
const validationErrors = 'div[data-cy="validation-errors"]'
const ageError = 'Please enter a valid age!'
const genderError = 'Please enter your gender!'
const emailError = 'Please enter a valid email!'
const username = 'TESTER'
const age = '25'
const gender = 'Male'
const email = 'tester123@testserver.com'

describe('CreateProfile page', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('create_profile')
    })

    afterEach(() => {

    })

    it('Correct fields are rendered', () => {
        cy.get(ageField).should('exist')
        cy.get(genderField).should('exist')
        cy.get(emailField).should('exist')
        cy.get(preferenceField).should('exist')
        cy.get(historyField).should('exist')
        cy.get(descriptionField).should('exist')
        cy.get(togglePrivacy).should('exist')
        cy.get(submitButton).should('exist')
    })

    it('Clicking privacy toggle switches to Public', () => {
        cy.get(togglePrivacy).click()
        cy.contains(privacy, 'Public')
    })

    it('Validation functions correctly', () => {
        cy.get(ageField).type('38X')
        cy.get(emailField).type('chrisgo2286yahoo.com')
        cy.get(submitButton).click()
        cy.get(validationErrors).children().should(($error) => {
            expect($error.eq(0)).to.contain(ageError)
            expect($error.eq(1)).to.contain(genderError)
            expect($error.eq(2)).to.contain(emailError)
        })
    })

    it('Submitting data navigates to UserProfile; shows correct data', () => {
        cy.get(ageField).type(age)
        cy.get(genderField).select(gender)
        cy.get(emailField).type(email)
        cy.get(submitButton).click()
        cy.url().should('include', '/user_profile')
        cy.contains(profileUsername, username)
        cy.contains(profileAge, age)
        cy.contains(profileGender, gender)
        cy.contains(profileEmail, email)
    })
})