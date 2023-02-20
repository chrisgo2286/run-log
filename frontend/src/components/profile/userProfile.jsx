import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../misc/apiCalls";
import ProfileHeader from "./profileHeader";
import ProfileBody from "./profileBody";
import ProfileFooter from "./profileFooter";
import Card from "../miscComponents/card/card";
import './profile.css';

export default function UserProfile () {

    const navigate = useNavigate();
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
            if (data) {
                setProfile(data)
            } else {
                navigate('/create_profile');
            }
            
        })
    }, [])

    return (
        <div className='profile'>
            <Card
                header={ <ProfileHeader profile={ profile } /> }
                body={ <ProfileBody profile={ profile } /> }
                footer={ <ProfileFooter profile={ profile } /> }
                hover={ false } 
            />
        </div>
    )
}