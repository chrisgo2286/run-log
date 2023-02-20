import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserProfile } from '../../misc/apiCalls';
import ProfileFields from '../updateProfile/profileFields';
import Button from '../miscComponents/button/button';

export default function CreateProfile () {
    const navigate = useNavigate();
    const [ fields, setFields ] = useState({
        age: '',
        gender: '',
        email: '',
        preference: '',
        history: '',
        description: ''
    })

    function handleSubmit () {
        const newFields = { ...fields, owner: '1' };
        console.log(newFields);
        createUserProfile(newFields)
        navigate('/user_profile');
    }

    return (
        <div className="update-profile">
            <ProfileFields fields={ fields } setFields={ setFields } />
            <Button 
                onClick={ handleSubmit } 
                label='Submit'
                data-cy='create-profile-btn' />
        </div>
    )
}