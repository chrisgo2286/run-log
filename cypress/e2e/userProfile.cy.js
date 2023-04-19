import profileData from '../fixtures/profileData.json'
import { userProfile, navLinks } from '../fixtures/selectors.json'
import { testUser2 } from '../fixtures/testUser.json'

describe('UserProfile page', () => {
    beforeEach(() => {
        cy.login(testUser2.username, testUser2.password)
        cy.get(navLinks.userProfile).click()
    })

    it('Page renders with correct data', () => {
        cy.get(userProfile.username).should('have.text', profileData.username.toLowerCase())
        cy.get(userProfile.ageGender).should('have.text', profileData.ageGender)
        cy.get(userProfile.email).should('have.text', profileData.email)
        cy.get(userProfile.preference).should('have.text', profileData.preference)
        cy.get(userProfile.history).should('have.text', profileData.history)
        cy.get(userProfile.description).should('have.text', profileData.description)
    })

    it('Clicking edit btn navigates to update_profile page', () => {
        cy.get(userProfile.editBtn).click()
        cy.url().should('include', 'update_profile')
    })
})