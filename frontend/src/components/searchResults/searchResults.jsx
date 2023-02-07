import { useLocation } from "react-router-dom"
import SearchItem from "./searchItem"
import './searchResults.css';

export default function SearchResults () {
    const profiles = useLocation().state
    console.log(profiles)
    return (
        <div className='search-results'>
            <div className='search-results-header'>Search Results</div>
            <div className='search-results-body'>
                { profiles.map((profile) => (
                    <SearchItem profile={ profile } key={ profile.id } />
                ))}
            </div>
        </div>

        
        
    )
}