import { useEffect, useState, useContext } from "react";
import { getProfile } from "../../misc/apiCalls";
import { UserContext } from "../../misc/context";

export default function Profile () {
    const user = useContext(UserContext)[0];
    const [profile, setProfile ] = useState({
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
        <div className="profile">
            <div>Username: { user.username }</div>
            <div>Age: { profile.age }</div>
            <div>Gender: { profile.gender }</div>
            <div>Email: { profile.email }</div>
            <div>Running Preference: { profile.preference }</div>
            <div>Running History: { profile.history }</div>
            <div>About Me: { profile.description }</div>
        </div>
    )
}