import { useState } from "react";

export default function SelectField ({ 
    name, 
    initial, 
    options, 
    fields, 
    setFields, 
    ...other }) {

    const [ choice, setChoice ] = useState(initial)

    function handleChange (event) {
        const { name, value } = event.target;
        setChoice(value)
        setFields({ ...fields, [name]: value });
    }

    return (
        <select name={ name } value={ choice } onChange={ handleChange }>
            { 
                options.map((option, ndx) =>
                    <option key={ndx} value={ option }>{ option }</option>
            )}
        </select>
    )
}