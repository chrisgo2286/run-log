import { createProfile } from '../fixtures/selectors.json'

describe('Update Profile page', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('update_profile/')
    })
    it('Page renders correct information', () => {
        cy.get(createProfile.ageField).should('include', 
    })
})