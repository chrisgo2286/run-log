import React from 'react'
import Button from './button'

const btnText = 'SUBMIT'

describe('<Button />', () => {
  it('renders button', () => {
    cy.mount(<Button>{ btnText }</Button>)
    cy.get('div.button').should('contains.text', btnText)
  })
})