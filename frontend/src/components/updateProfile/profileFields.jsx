import React from "react";
import Input from "../miscComponents/input/input";
import TextArea from "../miscComponents/textArea/textArea";
import SelectField from "../miscComponents/selectField/selectField";
import ToggleButton from "../miscComponents/toggleButton/toggleButton";

export default function ProfileFields ({ fields, setFields }) {
    return (
        <React.Fragment>
            <div className="profile-fields-a">
                <Input
                    type='integer'
                    name='age'
                    value={ fields.age }
                    fields={ fields }
                    setFields={ setFields }
                    className="profile-age"
                    data-cy='profile-age' />
                <SelectField
                    name='gender'
                    initial={ fields.gender }
                    options={[ '', 'Male', 'Female' ]}
                    fields={ fields }
                    setFields={ setFields }
                    className="profile-gender"
                    data-cy='profile-gender' />
                <Input
                    type='email'
                    name='email'
                    value={ fields.email }
                    fields={ fields }
                    setFields={ setFields }
                    className="profile-email"
                    data-cy='profile-email' />
            </div>
            <div className="profile-fields-b">
                <TextArea
                    name='preference'
                    value={ fields.preference }
                    fields={ fields }
                    setFields={ setFields }
                    data-cy='profile-preference' />
                <TextArea
                    name='history'
                    value={ fields.history }
                    fields={ fields }
                    setFields={ setFields }
                    data-cy='profile-history' />
                <TextArea
                    name='description'
                    value={ fields.description }
                    fields={ fields }
                    setFields={ setFields }
                    data-cy='profile-description' />
            </div>
            <div className='profile-fields-c'>
                <ToggleButton
                    name='privacy'
                    init_choice={ fields.privacy }
                    alt_choice={ fields.privacy === 'Public' ? 'Private': 'Public' }
                    fields={ fields }
                    setFields={ setFields } />
            </div>

        </React.Fragment>
    )
}