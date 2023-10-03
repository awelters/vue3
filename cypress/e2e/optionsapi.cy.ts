describe('Options API', () => {
  it('visits the app root url', () => {
    cy.visit('/optionsapi')
    cy.contains('h1', 'Vite + Vue + Options API')
  })
})
