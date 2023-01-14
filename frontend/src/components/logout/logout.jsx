import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../misc/context';
import { postLogout } from '../../misc/apiCalls';
import { clearUser } from '../../misc/userFunctions';

export default function Logout () {
    
    const user = useContext(UserContext)[0];
    const setUser = useContext(UserContext)[1];
    const navigate = useNavigate();

    async function handleLogout () {
        if(localStorage.getItem('token') !== '') {
            const response = await postLogout();
            
            if(response.status === 200) {
                clearUser(user, setUser)
                navigate('/');
            }
        }
    }
    
    return (
        <React.Fragment>
            <div onClick={ handleLogout }>Logout</div>
        </React.Fragment>
    )
}