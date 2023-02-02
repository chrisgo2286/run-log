import { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { getProfile } from "../../misc/apiCalls";
import { UserContext } from "../../misc/context";
import { navigateToUpdateProfile } from "../../misc/navFunctions";
import ProfileItem from "./profileItem";
import Button from '../miscComponents/button';
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

    return (
        <div className="profile">
            <ProfileItem label='Username' data={ user.username } />
            <ProfileItem label='Age' data={ profile.age } />
            <ProfileItem label='Gender' data={ profile.gender } />
            <ProfileItem label='Email' data={ profile.email } />
            <ProfileItem label='Running Preference' data={ profile.preference } />
            <ProfileItem label='Running History' data={ profile.history } />
            <ProfileItem label='About Me' data={ profile.description } />
            <Button onClick={ handleNavToUpdateProfile } label='Edit' />
        </div>
    )
}