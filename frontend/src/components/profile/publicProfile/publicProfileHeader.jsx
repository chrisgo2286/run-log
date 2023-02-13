import { useNavigate } from "react-router-dom"
import ArrowButton from "../../miscComponents/arrowButton/arrowButton"
import ProfileHeader from "../profileHeader"
import { navigateToPublicProfile } from "../../../misc/navFunctions";
import { findPreviousProfile, findNextProfile } from "../../../misc/profileFunctions";

export default function PublicProfileHeader ({ profile, profile_ids }) {
    const navigate = useNavigate();
    const previous_id = findPreviousProfile(profile.id, profile_ids)
    const next_id = findNextProfile(profile.id, profile_ids)

    function handlePreviousProfile () {    
        navigateToPublicProfile(navigate, previous_id, profile_ids)
    }

    function handleNextProfile () {
        navigateToPublicProfile(navigate, next_id, profile_ids)
    }

    function handlePriorArrowHidden () {
        return (previous_id >= 0) ? false: true;
    }

    function handleNextArrowHidden () {
        return (next_id) ? false: true;
    }

    return (
        <div className='public-profile-header'>
            <div className='profile-arrow-button'>
                <ArrowButton 
                    onClick={ handlePreviousProfile } 
                    label='&#8678;'
                    hidden={ handlePriorArrowHidden() }/>
            </div>
            <ProfileHeader profile={ profile } />   
            <div className='profile-arrow-button'>
                <ArrowButton 
                    onClick={ handleNextProfile } 
                    label='&#8680;'
                    hidden={ handleNextArrowHidden() }/>
            </div>
        </div>
    )
}