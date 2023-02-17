import React, { useState } from "react";
import './card.css';

export default function Card ({ header, body, footer, hover=true, ...other }) {
    const [ ishovered, setIsHovered ] = useState(false);

    function toggleHover () {
        setIsHovered(!ishovered);
    }

    function handleClass () {
        return (ishovered && hover) ? 'card card-hover': 'card';
    }

    return (
        <div 
            className={ handleClass() }
            onMouseEnter={ toggleHover }
            onMouseLeave={ toggleHover } 
            { ...other } >

            <div className='card-header'>
                { header }
            </div>
            <div className='card-body'>
                { body }
            </div>
            <div className='card-footer'>
                { footer }
            </div>
        </div>
    )
}