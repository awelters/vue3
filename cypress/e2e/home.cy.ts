describe('Home', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome')
    cy.contains('.read-the-docs', 'Click on the Vite and Vue logos to learn more')
  })
})
