import React from "react";
import Input from "../miscComponents/input";
import SelectField from "../miscComponents/selectField";

export default function ProfileFields ({ fields, setFields }) {
    return (
        <React.Fragment>
            <Input
                type='integer'
                name='age'
                value={ fields.age }
                fields={ fields }
                setFields={ setFields }
                placeholder={ 'Age'}
                data-cy='profile-age' />
            <SelectField
                name='gender'
                initial={ fields.gender }
                options={[ 'Male', 'Female' ]}
                fields={ fields }
                setFields={ setFields } />
            <Input
                type='email'
                name='email'
                value={ fields.email }
                fields={ fields }
                setFields={ setFields }
                placeholder={ 'E-mail'}
                data-cy='profile-email' />
            <Input
                type='text'
                name='preference'
                value={ fields.preference }
                fields={ fields }
                setFields={ setFields }
                placeholder={ 'Running Preference'}
                data-cy='profile-preference' />
            <Input
                type='text'
                name='history'
                value={ fields.history }
                fields={ fields }
                setFields={ setFields }
                placeholder={ 'Running History'}
                data-cy='profile-history' />
            <Input
                type='text'
                name='description'
                value={ fields.description }
                fields={ fields }
                setFields={ setFields }
                placeholder={ 'About Me'}
                data-cy='profile-description' />
        </React.Fragment>
    )
}