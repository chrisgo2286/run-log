import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../index';
import axios from 'axios';

export default function Logout () {
    
    const user = useContext(UserContext)[0];
    const setUser = useContext(UserContext)[1];
    const navigate = useNavigate();

    function handleLogout () {
        if(localStorage.getItem('token') !== '') {
            axios.post('/api/accounts/logout/')
            .then(response => {
                console.log(response)
            
                if(response.status === 200) {
                    localStorage.setItem('token', '');
                    const newUser = {
                        username: '',
                        isLoggedIn: false,
                        token: ''
                    }
                    setUser({ ...user, ...newUser });
                    
                    navigate('/');
                }
            })
        }

    }
    
    return (
        <React.Fragment>
            <div onClick={ handleLogout }>Logout</div>
        </React.Fragment>
    )
}