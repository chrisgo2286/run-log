import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../misc/context';
import { postRegistration } from '../../misc/apiCalls';
import { updateLocalStorage } from '../../misc/userFunctions';
import { updateUser } from '../../misc/userFunctions';
import NewUserFields from './newUserFields';
import Button from '../miscComponents/button/button';
import './register.css';

export default function Register () {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: '',
        password1: '',
        password2: '',
    })

    async function handleSubmit () {

        const response = await postRegistration(credentials);
        
        if(response.status === 201) {
            const token = response.data.key;
            updateLocalStorage(token, credentials.username)
            updateUser(token, credentials.username, user, setUser)
            navigate('/calendar');
        }
    }

    return (
        <div className="register" data-cy='register-link'>
            <NewUserFields fields={ credentials } setFields={ setCredentials }/>
            <Button 
                onClick={ handleSubmit } 
                label='Register' 
                data-cy='register-btn' />
        </div>
    )
}