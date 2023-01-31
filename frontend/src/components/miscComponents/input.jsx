import './input.css';

export default function Input ({ type, name, value, fields, setFields, ...other }) {
    
    function handleChange (event) {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value });
    }

    return (
        <div className="input-pair">
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