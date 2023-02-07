import React from 'react';
import Card from '../miscComponents/card/card';

export default function SearchItem ({ profile }) {
    const cardHeader = (
        <div>Username: { profile.username }</div>
    )

    const cardBody = (
        <React.Fragment>
            <div>Age: { profile.age }</div>
            <div>Gender: { profile.gender }</div>
        </React.Fragment>
    )

    return (
        <Card header={ cardHeader } body={ cardBody } footer={ null } />
    )
}