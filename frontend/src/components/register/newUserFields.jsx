import React from "react";
import Input from "../miscComponents/input";

export default function NewUserFields ({ fields, setFields }) {
    return (
        <React.Fragment>
            <Input 
                type='text'
                name='username'
                value={ fields.username }
                fields={ fields }
                setFields={ setFields }
                placeholder='Username' />
            <Input
                type='password'
                name='password1'
                value={ fields.password1 }
                fields={ fields }
                setFields={ setFields }
                placeholder='Password' />
            <Input
                type='password'
                name='password2'
                value={ fields.password2 }
                fields={ fields }
                setFields={ setFields }
                placeholder='Re-Type Password' />
        </React.Fragment>
    )
}