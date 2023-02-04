import React, { useContext } from "react";
import { UserContext } from "../../misc/context";
import ProfileItem from "./profileItem";

export default function ProfileHeader ({ profile }) {
    const user = useContext(UserContext)[0];

    return (
        <React.Fragment>
            <ProfileItem label='Username' data={ user.username } />
            <ProfileItem label='Age' data={ profile.age } />
            <ProfileItem label='Gender' data={ profile.gender } />
            <ProfileItem label='Email' data={ profile.email } />
        </React.Fragment>
    )
}