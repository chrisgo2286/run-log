import { useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../misc/context';
import { postLogin } from '../../misc/apiCalls';
import { updateLocalStorage, updateUser } from '../../misc/userFunctions';
import LoginFields from './loginFields';

export default function Login () {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    })

    async function handleSubmit () {
        const response = await postLogin(credentials);
    
        if(response.status === 200) {
            const token = response.data.key;
            updateLocalStorage(token, credentials.username);
            updateUser(token, credentials.username, user, setUser);
            navigate('/calendar');
        }
    }

    return (
        <div className="login">
            <LoginFields fields={ credentials } setFields={ setCredentials } />
            <button onClick={ handleSubmit } data-cy='login-btn'>SUBMIT</button>
        </div>
    )
}