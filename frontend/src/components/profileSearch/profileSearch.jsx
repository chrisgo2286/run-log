import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../miscComponents/button/button"
import ProfileSearchFilter from './profileSearchFilter';
import { getProfiles } from '../../misc/apiCalls';
import { navigateToSearchResults } from '../../misc/navFunctions';
import ValidationErrors from '../miscComponents/validationErrors/validationErrors';
import { validateProfileSearch } from '../../misc/validation/validateProfileSearch';

export default function ProfileSearch () {
    const navigate = useNavigate();
    const [ errors, setErrors ] = useState([])
    const [ filters, setFilters ] = useState({
        username: '',
        age_min: '',
        age_max: '',
        gender: ''
    });

    function handleSubmit () {
        const newErrors = validateProfileSearch(filters)
        if (newErrors.length > 0) {
            setErrors(newErrors)
            return null
        }
        
        getProfiles(filters)
            .then((profiles) => {
                navigateToSearchResults(navigate, profiles)
            })
    }

    return (
        <div className='profile-search'>
            <ProfileSearchFilter filters={ filters } setFilters={ setFilters } />
            <Button onClick={ handleSubmit } label='Search' />
            <ValidationErrors errors={ errors } />    
        </div>
    )
}