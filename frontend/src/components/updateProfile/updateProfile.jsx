import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { patchProfile } from '../../misc/apiCalls';
import ProfileFields from './profileFields';
import Button from '../miscComponents/button/button';
import './updateProfile.css';

export default function UpdateProfile () {
    const profile = useLocation().state;
    const { id, age, gender, email, preference, history, description } = profile;
    const navigate = useNavigate();
    const [ fields, setFields ] = useState({
        age: age,
        gender: gender,
        email: email,
        preference: preference,
        history: history,
        description: description
    })

    function handleSubmit () {
        patchProfile(id, fields)
        navigate('/user_profile');
    }

    return (
        <div className="update-profile">
            <ProfileFields fields={ fields } setFields={ setFields } />
            <Button 
                onClick={ handleSubmit } 
                label='Submit'
                data-cy='update-profile-btn' />
        </div>
    )
}