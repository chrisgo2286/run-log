import { useNavigate } from "react-router-dom"
import ArrowButton from "../../miscComponents/arrowButton/arrowButton"
import ProfileHeader from "../profileHeader"
import { navigateToPublicProfile } from "../../../misc/navFunctions";
import { findPreviousProfile, findNextProfile } from "../../../misc/profileFunctions";

export default function PublicProfileHeader ({ profile, profile_ids }) {
    const navigate = useNavigate();

    function handlePreviousProfile () {
        const previous_id = findPreviousProfile(profile.id, profile_ids)
        navigateToPublicProfile(navigate, previous_id, profile_ids)
    }

    function handleNextProfile () {
        const next_id = findNextProfile(profile.id, profile_ids)
        navigateToPublicProfile(navigate, next_id, profile_ids)
    }

    return (
        <div className='public-profile-header'>
            
            <div className='profile-arrow-button'>
                <ArrowButton onClick={ handlePreviousProfile } label='&#8678;'/>
            </div>
            
            <ProfileHeader profile={ profile } />   
            
            <div className='profile-arrow-button'>
                <ArrowButton onClick={ handleNextProfile } label='&#8680;'/>
            </div>

        </div>
    )
}