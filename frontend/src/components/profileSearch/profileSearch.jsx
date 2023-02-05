import React, { useState } from 'react';
import Button from "../miscComponents/button/button"
import { getProfiles } from '../../misc/apiCalls';

export default function ProfileSearch () {
    const [ profiles, setProfiles ] = useState([])

    function handleSubmit () {
        getProfiles(setProfiles)
    }

    console.log(profiles)
    return (
        <div className='profile-search'>
            <div>PROFILE SEARCH</div>
            <Button onClick={ handleSubmit } label='Search' />    
        </div>
    )
}