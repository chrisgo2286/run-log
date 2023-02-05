import React, { useEffect, useState } from "react";
import { getProfile } from "../../misc/apiCalls";
import ProfileHeader from "./profileHeader";
import ProfileBody from "./profileBody";
import ProfileFooter from "./profileFooter";
import Card from "../miscComponents/card/card";
import './profile.css';

export default function Profile () {
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

    return (
        <Card
            header={ <ProfileHeader profile={ profile } /> }
            body={ <ProfileBody profile={ profile } /> }
            footer={ <ProfileFooter profile={ profile } /> } 
        />
    )
}