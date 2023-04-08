//Test that if no profile, create profile page is loaded
//Test that page shows all fields
//Clicking privacy toggle switches to Public
//Test that validations are in place
//Test that submitting navigates to UserProfile

describe('CreateProfile page renders correctly', () => {
    before(() => {
        cy.login()
        cy.visit('create_profile')
    })

    it('Correct fields are rendered', () => {
        cy.get('input[data-cy="profile-age"]').should('exist')
    })
})