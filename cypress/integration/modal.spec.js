/// <reference types="cypress" />
import mount from 'cypress-svelte-unit-test'
import modal from 'components/modal'

describe('Modal', () => {
  describe('startActive', () => {
    beforeEach(() => {
      mount(modal, {
        props: {
          active: true
        }
      })
    })
    it('is active', () => {
      cy.get('div.modal')
      .should('have.class', 'is-active')
    })
    it('closes on background click', () => {
      cy.get('.modal-background').first().click({force: true}).then(() => {
        cy.get('div.modal').should('not.have.class', 'is-active')
      })
    })
    it('closes on success click', () => {
      cy.get('.modal-card-foot > button').first().click().then(() => {
        cy.get('div.modal').should('not.have.class', 'is-active')
      })
    })
    it('closes on cancel click', () => {
      cy.get('.modal-card-foot > button').last().click().then(() => {
        cy.get('div.modal').should('not.have.class', 'is-active')
      })
    })
  })
})

