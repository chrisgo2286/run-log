import Logout from "./logout";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContext } from "../../misc/context";

const user = {
    username: '',
    isLoggedIn: false,
    token: ''
}

let setUser;

describe('<Logout />', () => {
    it('renders Logout', () => {
        cy.mount(
            <Router>
                <UserContext.Provider value={[ user, setUser ]}>
                    <Logout />
                </UserContext.Provider>
            </Router>
        )
        cy.contains('Logout').should('exist');
    })
})