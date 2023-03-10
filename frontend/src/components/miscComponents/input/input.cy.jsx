import React from 'react';
import Input from './input';

let fields;
let setFields;

describe('Input Component', () => {
  it('renders', () => {
    cy.mount(
        <Input
            type='text'
            name='username'
            value='christian'
            fields={ fields }
            setFields={ setFields }
        />
    )
    cy.get('input[data-cy="input-username"]').should('exist')
  })
})