import { profileData } from '../fixtures/profileData.json'

const profileUsername = 'div[data-cy="profile-username"]'
const profileAge = 'div[data-cy="profile-age"]'
const profileGender = 'div[data-cy="profile-gender"]'
const profileEmail = 'div[data-cy="profile-email"]'
const profilePreference = 'div[data-cy="profile-preference"]'
const profileHistory = 'div[data-cy="profile-history"]'
const profileDescription = 'div[data-cy="profile-description"]'
const profileEditBtn = 'div[data-cy="profile-edit-btn"]'

describe('UserProfile page', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('user_profile')
    })

    it('Page renders with correct data', () => {
        cy.contains(profileUsername, profileData.username)
        cy.contains(profileAge, profileData.age)
        cy.contains(profileGender, profileData.gender)
        cy.contains(profileEmail, profileData.email)
        cy.contains(profilePreference, profileData.preference)
        cy.contains(profileHistory, profileData.history)
        cy.contains(profileDescription, profileData.description)
    })

    it('Clicking edit btn navigates to update_profile page', () => {
        cy.get(profileEditBtn).click()
        cy.url().should('include', 'update_profile')
    })
})