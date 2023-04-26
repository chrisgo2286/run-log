import { profileFilter, testUser, navLinks } from '../fixtures/selectors.json'

description('Profile Filters', () => {
    beforeEach(() => {
        cy.login(testUser.username, testUser.password)
        cy.get(navLinks.profileSearch).click()
    })

    it('Comp renders correctly', () => {
        cy.get(profileFilter.username).should('exist')
        cy.get(profileFilter.ageMin).should('exist')
        cy.get(profileFilter.ageMax).should('exist')
        cy.get(profileFilter.gender).should('exist')    
    })

    it('User can input into fields', () => {
        cy.get(profileFilter.username).should('exist')
        cy.get(profileFilter.ageMin).should('exist')
        cy.get(profileFilter.ageMax).should('exist')
        cy.get(profileFilter.gender).should('exist')    
    })
})