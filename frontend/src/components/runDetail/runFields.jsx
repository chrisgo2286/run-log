import React from "react";
import Input from "../miscComponents/input";

export default function RunFields ({ fields, setFields }) {
    return (
        <React.Fragment>
            <Input
                type='date'
                name='date'
                value={ fields.date }
                fields={ fields }
                setFields={ setFields }
                placeholder={ fields.date }
                data-cy='run-date'/>
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
        </React.Fragment>
    )
}