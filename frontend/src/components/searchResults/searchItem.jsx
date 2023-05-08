import React from 'react';
import { useNavigate } from 'react-router-dom';
import { navigateToPublicProfile } from '../../misc/navFunctions';
import { SearchItemHeader, SearchItemBody, SearchItemFooter } from './searchItemComps';
import Card from '../miscComponents/card/card';

export default function SearchItem ({ profile, profile_ids }) {
    const navigate = useNavigate()
    function handleClick () {
        navigateToPublicProfile(navigate, profile.id, profile_ids, profile.owner_id)
    }

    return (
        <Card 
            header={ <SearchItemHeader profile={ profile } /> } 
            body={ <SearchItemBody profile={ profile } /> } 
            footer={ <SearchItemFooter profile={ profile } /> }
            onClick={ handleClick } />
    )
}