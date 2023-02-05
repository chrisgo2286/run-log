import { useState } from 'react';
import './arrowButton.css';

export default function ArrowButton ({ onClick, label }) {
    const [ ishovered, setIsHovered ] = useState(false)

    function toggleHover () {
        setIsHovered(!ishovered)
    }

    function buildClass () {
        return (ishovered) ? 'arrow-button arrow-btn-hover': 'arrow-button';
    }

    return (
        <div 
            className={ buildClass() } 
            onClick={ onClick }
            onMouseEnter={ toggleHover }
            onMouseLeave={ toggleHover } >
            { label }
        </div>
    )
}