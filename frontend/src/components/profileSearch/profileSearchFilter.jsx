import Input from '../miscComponents/input/input';
import SelectField from '../miscComponents/selectField/selectField';

export default function ProfileSearchFilter ({ filters, setFilters }) {

    return (
        <div className='profile-search-filter'>
            <Input
                type='text'
                name='username'
                value={ filters.username }
                fields={ filters }
                setFields={ setFilters } />
            <Input
                type='integer'
                name='age-min'
                value={ filters.age_min }
                fields={ filters }
                setFields={ setFilters } />
            <Input
                type='integer'
                name='age-max'
                value={ filters.age_max }
                fields={ filters }
                setFields={ setFilters } />
            <SelectField
                name='gender'
                initial=''
                options={[ '', 'Male', 'Female' ]}
                fields={ filters }
                setFields={ setFilters } />
        </div>

    )
}