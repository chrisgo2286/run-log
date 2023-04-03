import { useState } from 'react'
import Button from '../miscComponents/button/button'
import Input from '../miscComponents/input/input'

export default function PasswordResetConfirm () {
    const [ fields, setFields ] = useState({
        password1: '',
        password2: '',
    })

    function handleSubmit () {
        console.log('Submitted')
    }
    
    return (
        <main>
            <h1>Enter new password.</h1>
            <h4>Please enter your new password twice so we can verify you 
                typed it in correctly</h4>
            <Input 
                type='password'
                name='password1'
                value={ fields.password1 }
                fields={ fields }
                setFields={ setFields } />
            <Input 
                type='password'
                name='password2'
                value={ fields.password2 }
                fields={ fields }
                setFields={ setFields } />
            <Button onClick={ handleSubmit } label='SUBMIT' />
        </main>       
    )
}