import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../miscComponents/button/button"
import { getProfiles } from '../../misc/apiCalls';
import { navigateToSearchResults } from '../../misc/navFunctions';

export default function ProfileSearch () {
    const navigate = useNavigate();
    const [ profiles, setProfiles ] = useState([]);
    const [ filters, setFilters ] = useState({});

    function handleSubmit () {
        getProfiles(setProfiles, filters)
            .then((profiles) => {
                navigateToSearchResults(navigate, profiles)
            })
    }

    return (
        <div className='profile-search'>
            <div>PROFILE SEARCH</div>
            <Button onClick={ handleSubmit } label='Search' />    
        </div>
    )
}