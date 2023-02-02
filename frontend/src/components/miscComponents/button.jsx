import { useState } from 'react';
import './button.css';

export default function Button ({ onClick, label }) {
    const [ ishovered, setIsHovered ] = useState(false)

    function toggleHover () {
        setIsHovered(!ishovered)
    }

    function 
    return (
        <div 
            className="button" 
            onClick={ onClick }
            onMouseEnter={ toggleHover }
            onMouseLeave={ toggleHover } >
            { label }
        </div>
    )
}