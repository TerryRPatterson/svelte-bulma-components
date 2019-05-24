/// <reference types="cypress" />
import mount from 'cypress-svelte-unit-test'
import modal from '@/modal/Modal'

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
    it('closes', () => {
      cy.get('.modal-background').click({force: true}).then(() => {
        cy.get('div.modal').should('not.have.class', 'is-active')
    })
  })
  })
})

