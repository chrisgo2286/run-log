import { useState } from 'react';
import './arrowButton.css';

export default function ArrowButton ({ onClick, label, disabled=false, ...other }) {
    const [ ishovered, setIsHovered ] = useState(false)

    function toggleHover () {
        setIsHovered(!ishovered)
    }

    function buildClass () {
        let btnClass = 'arrow-button'
        
        if(ishovered) {
            btnClass = btnClass + ' arrow-btn-hover'
        }

        if(disabled) {
            btnClass = btnClass + ' arrow-btn-disabled'
        }

        return btnClass;
    }

    function handleClick () {
        return (!disabled) ? onClick() : null;
    }

    return (
        <div 
            className={ buildClass() } 
            onClick={ handleClick }
            onMouseEnter={ toggleHover }
            onMouseLeave={ toggleHover } 
            { ...other }>
            { label }
        </div>
    )
}