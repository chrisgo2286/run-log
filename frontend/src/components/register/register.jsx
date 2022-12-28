import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../index';

export default function Register (props) {
    const user = useContext(UserContext)[0];
    const setUser = useContext(UserContext)[1];
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: '',
        password1: '',
        password2: '',
    })

    function handleChange (event) {
        const {name, value} = event.target;
        setCredentials({...credentials, [name]: value})
    }

    function handleSubmit (event) {
        axios.post('api/accounts/registration/', credentials)
        .then(response => {
            console.log(response)

            if(response.status === 201) {
                const token = response.data.key;
                localStorage.setItem('token', token);
                localStorage.setItem('username', credentials.username);
                const newUser = {
                    username: credentials.username,
                    isLoggedIn: true,
                    token: token,
                }
                setUser({ ...user, ...newUser });

                navigate('/calendar');
            }
        })
    }

    return (
        <div className="register">
            <input 
                type='text' 
                name='username' 
                value={ credentials.username}
                placeholder="Username" 
                onChange={ handleChange }
            />
            <input 
                type='password' 
                name='password1' 
                value={ credentials.password1 }
                placeholder="Password"
                onChange={ handleChange } 
            />
            <input 
                type='password' 
                name='password2' 
                value={ credentials.password2 }
                placeholder="Re-Type Password"
                onChange={ handleChange } 
            />
            <button onClick={ handleSubmit }>SUBMIT</button>
        </div>
    )
}