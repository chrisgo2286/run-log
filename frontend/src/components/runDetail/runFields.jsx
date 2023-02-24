import React from "react";
import Input from "../miscComponents/input/input";
import SelectField from "../miscComponents/selectField/selectField";

export default function RunFields ({ fields, setFields }) {
    const options = ['Easy Run', 'Long Run', 'Intervals', 'Tempo Run']
    return (
        <div className="run-fields">
            <Input
                type='date'
                name='date'
                value={ fields.date }
                fields={ fields }
                setFields={ setFields }
                placeholder={ fields.date }
                data-cy='run-date'/>
            <SelectField
                name='run_type'
                initial={ fields.run_type }
                options={ options }
                fields={ fields }
                setFields={ setFields } />
            <Input
                type='integer'
                name='distance'
                value={ fields.distance }
                fields={ fields }
                setFields={ setFields }
                placeholder='Distance' 
                data-cy='run-distance' />
            <Input
                type='integer'
                name='time'
                value={ fields.time }
                fields={ fields }
                setFields={ setFields }
                placeholder='Time (Minutes)'
                data-cy='run-time' />
            <Input
                type='text'
                name='comment'
                value={ fields.comment }
                fields={ fields }
                setFields={ setFields }
                placeholder='Comment'
                data-cy='run-comment' />
        </div>
    )
}