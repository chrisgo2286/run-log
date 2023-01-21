import React from "react"
import Logout from '../logout/logout';
import { Link } from 'react-router-dom';

export function userLinksLoggedIn (username) {
    return (
        <React.Fragment>
            <div className='greeting' data-cy='greeting'>Hi { username }!</div>
            <Logout />
        </React.Fragment>
    )
}

export function userLinksLoggedOut () {
    return (
        <React.Fragment>
            <Link to='/login' data-cy='login-link'>Login</Link>
            <Link to='/register' data-cy='register-link'>Register</Link>
        </React.Fragment>
    )
}