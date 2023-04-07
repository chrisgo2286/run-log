import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserProfile } from '../../misc/apiCalls';
import { UserContext } from '../../misc/context';
import ProfileFields from '../updateProfile/profileFields';
import Button from '../miscComponents/button/button';
import ValidationErrors from '../miscComponents/validationErrors/validationErrors';
import { validateProfile } from '../../misc/validation/validateProfile';

export default function CreateProfile () {
    const navigate = useNavigate();
    const user = useContext(UserContext)[0];
    const [ errors, setErrors ] = useState([])
    const [ fields, setFields ] = useState({
        username: user.username,
        age: '',
        gender: '',
        email: '',
        preference: '',
        history: '',
        description: '',
        privacy: 'Private'
    })

    function handleSubmit () {
        const newErrors = validateProfile(fields)
        if (newErrors.length > 0) {
            setErrors(newErrors)
            return null
        }
        
        const newFields = { ...fields, owner: '1' };
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
            <ValidationErrors errors={ errors } />
        </div>
    )
}