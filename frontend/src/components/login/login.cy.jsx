import Login from "./login";
import { BrowserRouter as Router } from 'react-router-dom';
import { UserContext } from "../../misc/context";


const user = {
    username: '',
    isLoggedIn: false,
    token: ''
}

let setUser;

describe('<Login />', () => {
    it('renders Login', () => {
        cy.mount(
            <Router>
                <UserContext.Provider value={[ user, setUser ]}>    
                    <Login />
                </UserContext.Provider>
            </Router>
        )
    })
})