import React from 'react';
import { useNavigate } from 'react-router-dom';
import { navigateToPublicProfile } from '../../misc/navFunctions';
import Card from '../miscComponents/card/card';

export default function SearchItem ({ profile }) {
    const navigate = useNavigate()
    const cardHeader = (
        <div>Username: { profile.username }</div>
    )

    const cardBody = (
        <React.Fragment>
            <div>Age: { profile.age }</div>
            <div>Gender: { profile.gender }</div>
        </React.Fragment>
    )

    const cardFooter = (
        <div>Link to Calendar</div>
    )

    function handleClick () {
        navigateToPublicProfile(navigate, profile.id)
    }

    return (
        <Card 
            header={ cardHeader } 
            body={ cardBody } 
            footer={ cardFooter }
            onClick={ handleClick } />
    )
}