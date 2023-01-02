export default function Input ({ type, name, value, fields, setFields, ...other }) {
    
    function handleChange (event) {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value });
    }

    return (
        <input
            type={ type } 
            name={ name }
            value={ value }
            onChange={ handleChange }
            { ...other }
        />
    )
}