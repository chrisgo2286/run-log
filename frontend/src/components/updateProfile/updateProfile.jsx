import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { patchProfile } from '../../misc/apiCalls';
import ProfileFields from './profileFields';

export default function UpdateProfile () {
    const profile = useLocation().state;
    const ({ profile_id, age, gender, email, preference, history, description } = profile);
    console.log(age)
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
        patchProfile(profile_id, profile)
        navigate('/profile');
    }

    return (
        <div className="update-profile">
            <ProfileFields fields={ fields } setFields={ setFields } />
            <button onClick={ handleSubmit } data-cy='update-profile-btn'>SUBMIT</button>
        </div>
    )
}