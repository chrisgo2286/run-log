import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { patchUserProfile } from '../../misc/apiCalls';
import ProfileFields from './profileFields';
import Button from '../miscComponents/button/button';
import './updateProfile.css';
import ValidationErrors from '../miscComponents/validationErrors/validationErrors';
import { validateProfile } from '../../misc/validation/validateProfile';

export default function UpdateProfile () {
    const profile = useLocation().state;
    const { id, age, gender, email, preference, history, description, privacy } = profile;
    const navigate = useNavigate();
    const [ errors, setErrors ] = useState([])
    const [ fields, setFields ] = useState({
        age: age,
        gender: gender,
        email: email,
        preference: preference,
        history: history,
        description: description,
        privacy: privacy
    })

    function handleSubmit () {
        const newErrors = validateProfile(fields)
        if (newErrors.length > 0) {
            setErrors(newErrors)
            return null
        }

        patchUserProfile(id, fields)
        navigate('/user_profile');
    }

    return (
        <div className="update-profile">
            <ProfileFields fields={ fields } setFields={ setFields } />
            <Button 
                onClick={ handleSubmit } 
                label='Submit'
                data-cy='update-profile-btn' />
            <ValidationErrors errors={ errors } />
        </div>
    )
}