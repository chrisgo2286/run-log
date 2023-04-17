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
        cy.get(createProfile.ageField).should('include', profileData.age)
        cy.get(createProfile.genderField).should('include', profileData.gender)
        cy.get(createProfile.emailField).should('include', profileData.email)
        cy.get(createProfile.preferenceField).should('include', profileData.preference)
        cy.get(createProfile.historyField).should('include', profileData.history)
        cy.get(createProfile.descriptionField).should('include', profileData.description)
    })

    it('Clicking privacy toggle should switch to public', () => {
        cy.get(createProfile.togglePrivacy).click()
        cy.get(createProfile.privacy).should('include', 'Public')
    })

    it('Typing new data should overwrite old data', () => {
        cy.get(createProfile.ageField).type(profileData2.age)
        cy.get(createProfile.emailField).type(profileData2.email)
        cy.get(createProfile.preferenceField).type(profileData2.preference)
        cy.get(createProfile.historyField).type(profileData2.history)
        cy.get(createProfile.descriptionField).type(profileData2.description)
        
        cy.get(createProfile.ageField).should('include', profileData2.age)
        cy.get(createProfile.emailField).should('include', profileData2.email)
        cy.get(createProfile.preferenceField).should('include', profileData2.preference)
        cy.get(createProfile.historyField).should('include', profileData2.history)
        cy.get(createProfile.descriptionField).should('include', profileData2.description)
    })

    it('Submitting new data should send POST request to api/profiles/* and nav to user profile', () => {
        cy.interceptPatchUserProfile()
        cy.get(createProfile.ageField).type(profileData2.age)
        cy.get(updateProfile.updateBtn).click()
        cy.url().should('include', 'user_profile')
    })
})