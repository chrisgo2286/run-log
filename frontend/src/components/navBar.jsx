import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../index';
import Logout from './logout';
import '../styles/navBar.css';

export default function NavBar () {
    const user = useContext(UserContext)[0];

    function handleUserLinks () {
        return (user.isLoggedIn) ? userLinksLoggedIn(): userLinksLoggedOut();
    }

    function userLinksLoggedIn () {
        return (
            <React.Fragment>
                <div className='greeting'>Hi { user.username }!</div>
                <Logout />
            </React.Fragment>
        )
    }
    function userLinksLoggedOut () {
        return (
            <React.Fragment>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </React.Fragment>
        )
    }
    return (
        <nav>
            <div className='site-links'>
                <Link to='/'>Home</Link>
                <Link to='/calendar'>Calendar</Link>
            </div>
            <div className='user-links'>
                { handleUserLinks() }
            </div>
        </nav>
    )
}