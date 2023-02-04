import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { getProfile } from "../../misc/apiCalls";
import { UserContext } from "../../misc/context";
import { navigateToUpdateProfile } from "../../misc/navFunctions";
import ProfileItem from "./profileItem";
import Button from '../miscComponents/button';
import Card from "../miscComponents/card/card";
import './profile.css';

export default function Profile () {
    const user = useContext(UserContext)[0];
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

    function profileHeader () {
        return (
            <React.Fragment>
                <ProfileItem label='Username' data={ user.username } />
                <ProfileItem label='Age' data={ profile.age } />
                <ProfileItem label='Gender' data={ profile.gender } />
                <ProfileItem label='Email' data={ profile.email } />
            </React.Fragment>
        )
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
            header={ profileHeader() }
            body={ profileBody() }
            footer={ profileFooter() } />
    )
}