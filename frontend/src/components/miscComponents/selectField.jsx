import { useState } from "react";
import './selectField.css';

export default function SelectField ({ 
    name, 
    initial, 
    options, 
    fields, 
    setFields, 
    ...other }) {

    const [ choice, setChoice ] = useState(initial);
    const [ isHovered, setIsHovered ] = useState(false);

    function toggleIsHovered () {
        setIsHovered(!isHovered);
    }

    function handleChange (event) {
        const { name, value } = event.target;
        setChoice(value)
        setFields({ ...fields, [name]: value });
    }

    function buildClass () {
        return (isHovered) ? 'select-pair select-hover': 'select-pair';
    }

    return (
        <div 
            className={ buildClass() }
            onMouseEnter={ toggleIsHovered }
            onMouseLeave={ toggleIsHovered }>
            <label htmlFor={ name }>{ name }</label>
            <select name={ name } value={ choice } onChange={ handleChange }>
                { 
                    options.map((option, ndx) =>
                        <option key={ndx} value={ option }>{ option }</option>
                )}
            </select>
        </div>
    )
}