import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./navBar";
import { UserContext } from '../../misc/context';
import { Link } from 'react-router-dom';

const userNone = {
    username: '',
    isLoggedIn: false,
    token: ''
}

const user = {
    username: 'Christian',
    isLoggedIn: true,
    token: 'xxx'
}
let setUser;

describe('<NavBar />', () => {

    it('renders NavBar, no user', () => {
        cy.mount(
            <Router>
                <UserContext.Provider value={[ userNone, setUser ]}>
                    <NavBar />
                </UserContext.Provider>
            </Router>
        );
        cy.contains('Home');
        cy.contains('Calendar');
        cy.contains('Login');
        cy.contains('Register');
    });
    
    it('renders NavBar, user logged in', () => {
        cy.mount(
            <Router>
                <UserContext.Provider value={[ user, setUser ]}>
                    <NavBar />
                </UserContext.Provider>
            </Router>
        );
        cy.contains('Home');
        cy.contains('Calendar');
        cy.contains('Hi Christian!');
        cy.contains('Logout');
    })
})