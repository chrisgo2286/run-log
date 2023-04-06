import { useState } from 'react';
import Input from '../miscComponents/input/input';
import Button from '../miscComponents/button/button';
import { resetPassword } from '../../misc/apiCalls';
import './passwordReset.css';

export default function PasswordReset () {
    const [ fields, setFields ] = useState({ email: '' })
    const [ message, setMessage ] = useState('')

    function handleReset () {
        resetPassword(fields)    
        .then((response) => {
            console.log(response)
            if(response.status === 200) {
                setMessage(response.data.msg);
            }
        })
    }

    return (
        <main className='password-reset'>
            <h1>Enter your email to reset your password.</h1>
            <Input 
                type='text'
                name='email'
                value={ fields.email }
                fields={ fields }
                setFields={ setFields } />
            <Button onClick={ handleReset } label='RESET' />
            <p>{ message }</p>
        </main>        
    )
}