import './validationErrors.css';

export default function ValidationErrors ({ errors }) {

    function handleErrors () {
        if (errors) {
            return (
                errors.map((error, ndx) => (
                    <div className='validation-error' key={ ndx }>{ error }</div>
                ))
            )
        } else {
            return null;
        }
    }

    return (
        <div className='validation'>
            { handleErrors() }
        </div>        
    )
}