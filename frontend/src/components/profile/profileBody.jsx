import ProfileItem from "./profileItem";

export default function ProfileBody ({ profile }) {
    return (
        <div className='profile-body'>
           <div className='profile-preference'>
                <div className='profile-label'>PREFERENCE</div>
                <div className='profile-data'>{ profile.preference }</div>
           </div>
           <div className='profile-history'>
                <div className='profile-label'>HISTORY</div>
                <div className='profile-data'>{ profile.history }</div>
           </div>
           <div className='profile-about-me'>
                <div className='profile-label'>ABOUT ME</div>
                <div className='profile-data'>{ profile.description }</div>
           </div>

        </div>
    )
}