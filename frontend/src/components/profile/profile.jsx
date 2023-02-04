import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getProfile } from "../../misc/apiCalls";
import { navigateToUpdateProfile } from "../../misc/navFunctions";
import ProfileHeader from "./profileHeader";
import ProfileItem from "./profileItem";
import Button from '../miscComponents/button';
import Card from "../miscComponents/card/card";
import './profile.css';

export default function Profile () {
    const navigate = useNavigate();
    const [profile, setProfile ] = useState({
        id: '',
        age: '',
        gender: '',
        email: '',
        preference: '',
        history: '',
        description: ''
    })

    useEffect(() => {
        getProfile(setProfile);
    }, [])

    function handleNavToUpdateProfile () {
        navigateToUpdateProfile(navigate, profile);
    }

    function profileBody () {
        return (
            <React.Fragment>
                <ProfileItem label='Running Preference' data={ profile.preference } />
                <ProfileItem label='Running History' data={ profile.history } />
                <ProfileItem label='About Me' data={ profile.description } />
            </React.Fragment>
        )
    }

    function profileFooter () {
        return (
            <Button onClick={ handleNavToUpdateProfile } label='Edit' />
        )
    }

    return (
        <Card
            header={ <ProfileHeader profile={ profile } /> }
            body={ profileBody() }
            footer={ profileFooter() } />
    )
}