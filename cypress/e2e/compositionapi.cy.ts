describe('Composition API', () => {
  it('visits the app root url', () => {
    cy.visit('/compositionapi')
    cy.contains('h1', 'Vite + Vue + Composition API')
  })
})
