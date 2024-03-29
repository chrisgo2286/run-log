import React, { useContext } from "react";
import { UserContext } from "../../misc/context";

export default function ProfileHeader ({ profile }) {
    const user = useContext(UserContext)[0];

    return (
        <div className='profile-header'>
            <div className='profile-username' data-cy='profile-username'>{ profile.username }</div>
            <div className='profile-gender-age' data-cy='profile-gender-age'>{ profile.gender } - { profile.age } yrs.</div>
            <div className='profile-email' data-cy='profile-email'>{ profile.email }</div>
        </div>
    )
}