import React from 'react'
import Welcome from '../components/Welcome'

describe('<Welcome />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Welcome />)
  })
})