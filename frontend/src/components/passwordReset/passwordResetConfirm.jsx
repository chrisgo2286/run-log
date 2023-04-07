import { useState } from 'react'
import { useParams } from "react-router-dom"
import Button from '../miscComponents/button/button'
import Input from '../miscComponents/input/input'
import { resetPasswordConfirm } from '../../misc/apiCalls'
import ValidationErrors from '../miscComponents/validationErrors/validationErrors';
import { validatePasswordResetConfirm } from '../../misc/validation/validatePasswordReset'

export default function PasswordResetConfirm () {
    const { token } = useParams()
    const [ message, setMessage ] = useState('')
    const [ errors, setErrors ] = useState([])
    const [ fields, setFields ] = useState({
        password1: '',
        password2: '',
    })

    async function handleSubmit () {
        const newErrors = validatePasswordResetConfirm(fields)
        if(newErrors.length > 0) {
            setErrors(newErrors);
            return null;
        } 

        const response = await resetPasswordConfirm(fields, token)
        if(response.status === 200) {
            setMessage(response.data.msg)
        } else {
            setErrors(['There was an error changing your password!'])
        }
    }
    
    return (
        <main className='password-reset'>
            <h1>Enter new password.</h1>
            <p>Please enter your new password twice so we can verify you 
                typed it in correctly</p>
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
            <p>{ message }</p>
            <ValidationErrors errors={ errors } />
        </main>       
    )
}