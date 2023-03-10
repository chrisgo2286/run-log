import { useState } from 'react';
import './button.css';

export default function Button ({ onClick, label, ...other }) {
    const [ ishovered, setIsHovered ] = useState(false)

    function toggleHover () {
        setIsHovered(!ishovered)
    }

    function buildClass () {
        return (ishovered) ? 'button btn-hover': 'button';
    }

    return (
        <div 
            className={ buildClass() } 
            onClick={ onClick }
            onMouseEnter={ toggleHover }
            onMouseLeave={ toggleHover } 
            { ...other }>
            { label }
        </div>
    )
}