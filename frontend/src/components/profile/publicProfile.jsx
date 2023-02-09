import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProfile, getUserProfile } from "../../misc/apiCalls";
import ProfileHeader from "./profileHeader";
import ProfileBody from "./profileBody";
import ProfileFooter from "./profileFooter";
import Card from "../miscComponents/card/card";
import './profile.css';

export default function PublicProfile () {

    const state = useLocation().state
    const [profile, setProfile ] = useState({
        id: '',
        username: '',
        age: '',
        gender: '',
        email: '',
        preference: '',
        history: '',
        description: ''
    })

    useEffect(() => {
        getProfile(state.profile_id)
        .then((data) => {
            setProfile(data)
        })
    }, [])

    return (
        <Card
            header={ <ProfileHeader profile={ profile } /> }
            body={ <ProfileBody profile={ profile } /> }
            footer={ <ProfileFooter profile={ profile } /> } 
        />
    )
}