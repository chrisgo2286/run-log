import Register from "./register";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContext } from "../../misc/context";

const user = {
    username: '',
    isLoggedIn: false,
    token: ''
}

let setUser;

describe('<Register />', () => {
    it('renders Register', () => {
        cy.mount(
            <Router>
                <UserContext.Provider value={[ user, setUser ]}>
                    <Register />
                </UserContext.Provider>
            </Router>
        )
    })
})