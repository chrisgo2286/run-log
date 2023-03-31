import { useState } from 'react';
import Input from '../miscComponents/input/input';
import Button from '../miscComponents/button/button';
import { resetPassword } from '../../misc/apiCalls';

export default function PasswordReset () {
    const [ fields, setFields ] = useState({ email: '' })

    function handleReset () {
        resetPassword(fields)    
        .then((response) => {
            if(response.status === 200) {
                unhideMessage();
            }
        })
    }

    function unhideMessage () {
        console.log('Message revealed')
    }

    return (
        <main>
            <h1>Enter you email to reset your password.</h1>
            <Input 
                type='text'
                name='email'
                value={ fields.email }
                fields={ fields }
                setFields={ setFields } />
            <Button onClick={ handleReset } label='RESET' />
            <p hidden>Please check your email for a link to reset your password.</p>
        </main>        
    )
}