import { useState } from 'react';
import './input.css';

export default function Input ({ type, name, value, fields, setFields, ...other }) {
    const [ ishovered, setIsHovered ] = useState(false);

    function handleChange (event) {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value });
    }

    function toggleIsHovered () {
        setIsHovered(!ishovered);
    }

    function buildClass () {
        return (ishovered) ? 'input-pair input-hover': 'input-pair';
    }

    return (
        <div 
            className={ buildClass() }
            onMouseEnter={ toggleIsHovered }
            onMouseLeave={ toggleIsHovered }>
            <label htmlFor={ name }>{ name }</label>
            <input
                type={ type } 
                name={ name }
                value={ value }
                id={ name }
                onChange={ handleChange }
                { ...other }
            />
        </div>
    )
}