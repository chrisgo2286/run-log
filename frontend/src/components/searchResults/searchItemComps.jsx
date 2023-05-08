import { useNavigate  } from "react-router-dom"
import { navigateToCalendarPublic } from "../../misc/navFunctions"

export function SearchItemHeader ({ profile }) {
    return (
        <div className='search-item-header'>
            <div className='search-item-username'>{ profile.username }</div>
            <div>{ profile.gender } - { profile.age } yrs.</div>
        </div>
    )
}

export function SearchItemBody ({ profile }) {
    return (
        <div className='search-item-body'>
            <div>{ profile.preference }</div>
            <div>{ profile.history }</div>
            <div>{ profile.description }</div>
        </div>
    )
}

export function SearchItemFooter ({ user_id }) {
    const navigate = useNavigate()
    function handleClick (e) {
        e.stopPropagation()
        navigateToCalendarPublic(navigate, user_id)
    }

    return (
        <div
            className='search-item-footer'
            onClick={ handleClick }>
            View Calendar
        </div>
    )
}