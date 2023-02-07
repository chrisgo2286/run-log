import { useLocation } from "react-router-dom"

export default function SearchResults () {
    const profiles = useLocation().state
    console.log(profiles)
    return (
        <div>Search Results</div>
    )
}