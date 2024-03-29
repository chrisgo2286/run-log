import { useNavigate } from "react-router-dom"
import { navigateToCalendarPublic } from "../../../misc/navFunctions"

export default function PublicProfileFooter ({ user_id }) {

    const navigate = useNavigate()

    function handleClick() {
        navigateToCalendarPublic(navigate, user_id)
    }

    return (
        <div
            className='public-profile-footer'
            onClick={ handleClick }>
            View Calendar
        </div>
    )
}