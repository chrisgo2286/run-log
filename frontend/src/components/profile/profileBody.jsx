export default function ProfileBody ({ profile }) {
    return (
        <div className='profile-body'>
           <div className='profile-body-item'>
                <div className='profile-label'>PREFERENCE</div>
                <div className='profile-data' data-cy='profile-preference'>{ profile.preference }</div>
           </div>
           <div className='profile-body-item'>
                <div className='profile-label'>HISTORY</div>
                <div className='profile-data' data-cy='profile-history'>{ profile.history }</div>
           </div>
           <div className='profile-body-item'>
                <div className='profile-label'>ABOUT ME</div>
                <div className='profile-data' data-cy='profile-description'>{ profile.description }</div>
           </div>

        </div>
    )
}