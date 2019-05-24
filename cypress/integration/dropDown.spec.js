/// <reference types="cypress" />
import mount from 'cypress-svelte-unit-test'
import dropdown from 'components/dropdown'


describe('Dropdown', () => {
  beforeEach(() => {
    mount(dropdown)
  })
  it('is togglable', () => {
    cy.get('div.dropdown')
    .should('have.class', 'is-hoverable')
    .should('not.have.class', 'is-active')
    cy.contains('trigger')
    .click()
    cy.get('div.dropdown')
    .should('have.class', 'is-active')
  })
  describe('link', () => {
    let spy
    beforeEach(() => {
      spy = cy.spy()
      mount(dropdown, {
        props: {
          listener: spy
        }
      })
    })
    it('fires listener', () => {
      cy.get('a.dropdown-item')
      .should('exist').click().then(() => {
        expect(spy).to.be.calledWith('Link worked')
      })
    })
  })
  describe('divider', () => {
    it('has divider class', () => {
      cy.get('hr').should('have.class', 'dropdown-divider')
    })
  })
})
