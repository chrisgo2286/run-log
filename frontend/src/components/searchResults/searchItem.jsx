import React from 'react';
import { useNavigate } from 'react-router-dom';
import { navigateToPublicProfile } from '../../misc/navFunctions';
import Card from '../miscComponents/card/card';

export default function SearchItem ({ profile, profile_ids }) {
    const navigate = useNavigate()
    const cardHeader = (
        <div className='search-item-header'>
            <div className='search-item-username'>{ profile.username }</div>
            <div>{ profile.gender } - { profile.age } yrs.</div>
        </div>
    )

    const cardBody = (
        <div className='search-item-body'>
            <div>{ profile.preference }</div>
            <div>{ profile.history }</div>
            <div>{ profile.description }</div>
        </div>
    )

    const cardFooter = (
        <div className='search-item-footer'>Link to Calendar</div>
    )

    function handleClick () {
        navigateToPublicProfile(navigate, profile.id, profile_ids)
    }

    return (
        <Card 
            header={ cardHeader } 
            body={ cardBody } 
            footer={ cardFooter }
            onClick={ handleClick } />
    )
}