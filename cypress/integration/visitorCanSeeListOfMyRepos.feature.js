describe('Visitor can see list of Github repos', () => {
  beforeEach(() => {
    cy.visit('/projects')
  });
  
  it('is expected to show header', () => {
    cy.get('[data-testId=header]').should('contain.text', 'Projects')
  });

  it('is expected to show sub header', () => {
    cy.get('[data-testId=sub-header]').should('contain.text', 'Seva Deriushkin first 10 Github Repos')
  });

  it('is expected to show list of repos', () => {
    cy.get('[data-testId=repo]').should('have.length', 10)
    cy.get('[data-testId=repo]').first().should('contain.text', 'git-pong-1: 2021-03-04T18:54:24Z')
  });
})
