import NewUserFields from './newUserFields';

const fields = {
    username: '',
    password1: '',
    password2: ''
}
let setFields;

describe('<NewUserFields />', () => {
    it('renders NewUserFields', () => {
        cy.mount(
            <NewUserFields fields={ fields } setFields={ setFields }/>
        )
        cy.get('Input[name="username"]').should('exist');
    })
})