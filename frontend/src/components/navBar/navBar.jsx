import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../index';
import { userLinksLoggedIn, userLinksLoggedOut } from './navBarFunctions';
import './navBar.css';

export default function NavBar () {
    const user = useContext(UserContext)[0];
    function handleUserLinks () {
        return (user.isLoggedIn) ? userLinksLoggedIn(user.username): userLinksLoggedOut();
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