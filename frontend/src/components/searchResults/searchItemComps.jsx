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

export function SearchItemFooter () {
    return (
        <div className='search-item-footer'>Link to Calendar</div>
    )
}