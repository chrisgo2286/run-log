import ProfileItem from "./profileItem";

export default function ProfileBody ({ profile }) {
    return (
        <div className='profile-body'>
            <ProfileItem label='Running Preference' data={ profile.preference } />
            <ProfileItem label='Running History' data={ profile.history } />
            <ProfileItem label='About Me' data={ profile.description } />
        </div>
    )
}