import { useLocation } from "react-router-dom"
import SearchItem from "./searchItem"
import { compileIDs } from "../../misc/profileFunctions";
import './searchResults.css';

export default function SearchResults () {
    const profiles = useLocation().state
    const profile_ids = compileIDs(profiles)

    return (
        <div className='search-results'>
            <div className='search-results-header'>Search Results</div>
            <div className='search-results-body'>
                { profiles.map((profile) => (
                    <SearchItem 
                        profile={ profile } 
                        key={ profile.id }
                        profile_ids={ profile_ids } />
                ))}
            </div>
        </div>

        
        
    )
}
