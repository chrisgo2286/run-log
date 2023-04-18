import { 
    createProfile, 
    userProfile, 
    updateProfile,
    navLinks 
} from '../fixtures/selectors.json'
import profileData from '../fixtures/profileData.json'
import profileData2 from '../fixtures/profileData2.json'
import { testUser2 } from '../fixtures/testUser.json'

describe('Update Profile page', () => {
    beforeEach(() => {
        cy.login(testUser2.username, testUser2.password)
        cy.get(navLinks.userProfile).click()
        cy.get(userProfile.editBtn).click()
    })

    it('URL should be api/update_profile', () => {
        cy.url().should('includes', 'update_profile')
    })

    it('Page renders correct information', () => {
        cy.get(createProfile.ageField).should('have.value', profileData.age)
        cy.get(createProfile.genderField).should('have.value', profileData.gender)
        cy.get(createProfile.emailField).should('have.value', profileData.email)
        cy.get(createProfile.preferenceField).should('have.value', profileData.preference)
        cy.get(createProfile.historyField).should('have.value', profileData.history)
        cy.get(createProfile.descriptionField).should('have.value', profileData.description)
    })

    it('Clicking privacy toggle should switch to public', () => {
        cy.get(createProfile.togglePrivacy).click()
        cy.get(createProfile.privacy).should('include', 'Public')
    })

    it('Typing new data should overwrite old data', () => {
        cy.get(createProfile.ageField).clear().type(profileData2.age)
        cy.get(createProfile.emailField).clear().type(profileData2.email)
        cy.get(createProfile.preferenceField).clear().type(profileData2.preference)
        cy.get(createProfile.historyField).clear().type(profileData2.history)
        cy.get(createProfile.descriptionField).clear().type(profileData2.description)
        
        cy.get(createProfile.ageField).should('have.value', profileData2.age)
        cy.get(createProfile.emailField).should('have.value', profileData2.email)
        cy.get(createProfile.preferenceField).should('have.value', profileData2.preference)
        cy.get(createProfile.historyField).should('have.value', profileData2.history)
        cy.get(createProfile.descriptionField).should('have.value', profileData2.description)
    })

    it('Submitting new data should send POST request to api/profiles/* and nav to user profile', () => {
        cy.interceptPatchUserProfile()
        cy.get(createProfile.ageField).type(profileData2.age)
        cy.get(updateProfile.updateBtn).click()
        cy.url().should('include', 'user_profile')
    })
})