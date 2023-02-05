import { useState } from 'react';
import './textArea.css';

export default function TextArea ({ name, value, fields, setFields, ...other }) {
    const [ ishovered, setIsHovered ] = useState(false);

    function handleChange (event) {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value });
    }

    function toggleIsHovered () {
        setIsHovered(!ishovered);
    }

    function buildClass () {
        return (ishovered) ? 'text-area-pair input-hover': 'text-area-pair';
    }

    return (
        <div 
            className={ buildClass() }
            onMouseEnter={ toggleIsHovered }
            onMouseLeave={ toggleIsHovered }>
            <label htmlFor={ name }>{ name }</label>
            <textarea
                name={ name }
                value={ value }
                id={ name }
                onChange={ handleChange }
                { ...other }
            />
        </div>
    )
}