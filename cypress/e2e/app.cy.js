// Sample Cypress E2E test for Angular app

describe('App Root', () => {
  it('should display welcome message', () => {
    cy.visit('/');
    cy.get('app-root .content span').should('exist');
  });
});
