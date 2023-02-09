import React, { useEffect, useState } from "react";
import { getUserProfile } from "../../misc/apiCalls";
import ProfileHeader from "./profileHeader";
import ProfileBody from "./profileBody";
import ProfileFooter from "./profileFooter";
import Card from "../miscComponents/card/card";
import './profile.css';

export default function UserProfile () {

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
        getUserProfile()
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