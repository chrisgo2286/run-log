import { profileData } from '../fixtures/profileData.json'
import { userProfile, navLinks } from '../fixtures/selectors.json'
import { testUser2 } from '..'

describe('UserProfile page', () => {
    beforeEach(() => {
        cy.login(testUser2.username, testUser2.password)
        cy.get(navLinks.userProfile).click()
    })

    it('Page renders with correct data', () => {
        cy.contains(userProfile.username, profileData.username)
        cy.contains(userProfile.age, profileData.age)
        cy.contains(userProfile.gender, profileData.gender)
        cy.contains(userProfile.email, profileData.email)
        cy.contains(userProfile.preference, profileData.preference)
        cy.contains(userProfile.history, profileData.history)
        cy.contains(userProfile.description, profileData.description)
    })

    it('Clicking edit btn navigates to update_profile page', () => {
        cy.get(userProfile.editBtn).click()
        cy.url().should('include', 'update_profile')
    })
})