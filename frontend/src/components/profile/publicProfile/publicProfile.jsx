import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProfile, getUserProfile } from "../../../misc/apiCalls";
import PublicProfileHeader from "./publicProfileHeader";
import ProfileBody from "../profileBody";
import PublicProfileFooter from "./publicProfileFooter";
import Card from "../../miscComponents/card/card";
import '../profile.css';

export default function PublicProfile () {

    const state = useLocation().state
    const { profile_ids, owner_id } = state
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
        getProfile(state.current_profile_id)
        .then((data) => {
            setProfile(data)
        })
    }, [state.current_profile_id])

    return (
        <div className='profile'>
            <Card
                header={ <PublicProfileHeader 
                    profile={ profile } 
                    profile_ids={ profile_ids }/> }
                body={ <ProfileBody profile={ profile } /> }
                footer={ <PublicProfileFooter user_id={ owner_id } /> }
                hover={ false } 
            />
        </div>
    )
}