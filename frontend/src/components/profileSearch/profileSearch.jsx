import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../miscComponents/button/button"
import ProfileSearchFilter from './profileSearchFilter';
import { getProfiles } from '../../misc/apiCalls';
import { navigateToSearchResults } from '../../misc/navFunctions';

export default function ProfileSearch () {
    const navigate = useNavigate();
    const [ filters, setFilters ] = useState({
        username: '',
        age_min: '',
        age_max: '',
        gender: ''
    });

    function handleSubmit () {
        getProfiles(filters)
            .then((profiles) => {
                navigateToSearchResults(navigate, profiles)
            })
    }

    return (
        <div className='profile-search'>
            <div>PROFILE SEARCH</div>
            <ProfileSearchFilter filters={ filters } setFilters={ setFilters } />
            <Button onClick={ handleSubmit } label='Search' />    
        </div>
    )
}