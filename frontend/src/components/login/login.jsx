import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../misc/context';
import { postLogin } from '../../misc/apiCalls';
import { updateLocalStorage, updateUser } from '../../misc/userFunctions';
import { Link } from 'react-router-dom';
import LoginFields from './loginFields';
import Button from '../miscComponents/button/button';
import ValidationErrors from '../miscComponents/validationErrors/validationErrors';
import './login.css';

export default function Login () {
    const errorMsg = ['You have entered invalid credentials!']
    const [user, setUser] = useContext(UserContext);
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    })

    async function handleSubmit () {
        const response = await postLogin(credentials);

        if(response.status && response.status === 200) {
            const token = response.data.key;
            updateLocalStorage(token, credentials.username);
            updateUser(token, credentials.username, user, setUser);
            navigate('/calendar');
        } else {
            setErrors(errorMsg)
        }
    }

    function handleReset () {
        navigate('/password_reset')
    }
    return (
        <div className="login">
            <LoginFields fields={ credentials } setFields={ setCredentials } />
            <Button onClick={ handleSubmit } label='Login' data-cy='login-btn'/>
            <Link to='/password_reset'>Forgot Password?</Link>
            <ValidationErrors errors={ errors } />
        </div>
    )
}