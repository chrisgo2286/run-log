import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../misc/context';
import { postLogout } from '../../misc/apiCalls';
import { clearUser } from '../../misc/userFunctions';

export default function Logout () {
    
    const [ user, setUser ] = useContext(UserContext);
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
            <div onClick={ handleLogout } data-cy='logout-link'>Logout</div>
        </React.Fragment>
    )
}