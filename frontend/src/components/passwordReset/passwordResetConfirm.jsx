import { useState } from 'react'
import { useParams } from "react-router-dom"
import Button from '../miscComponents/button/button'
import Input from '../miscComponents/input/input'
import { resetPasswordConfirm } from '../../misc/apiCalls'

export default function PasswordResetConfirm () {
    const { token } = useParams()
    const [ fields, setFields ] = useState({
        password1: '',
        password2: '',
    })
    const [ message, setMessage ] = useState('')

    async function handleSubmit () {
        const response = await resetPasswordConfirm(fields, token)
        if(response.status === 200) {
            setMessage(response.data.msg)
        } else {
            setMessage('There was an error changing your password!')
        }
    }
    
    return (
        <main>
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
        </main>       
    )
}