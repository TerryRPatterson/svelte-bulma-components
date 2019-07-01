/// <reference types="cypress" />
import mount from 'cypress-svelte-unit-test'
import pagination from '@/pagination/Pagination'

describe('Pagination', () => {
  describe('displays', () => {
    beforeEach(() => {
      mount(pagination)
    })
    it('with defaults', () => {
      cy.get('nav.pagination').first().should(($nav) => {
        const spy = cy.spy();
        $nav.get(0).addEventListener('change', spy);
      }).get('a.pagination-previous').location().then((oldLoc) => {
        cy.get('a.pagination-previous').click().location().should((newLoc) => {
          expect(oldLoc.href).to.eq(newLoc.href)
        })
      }).get('a.pagination-next').click()
    })
  })
})
