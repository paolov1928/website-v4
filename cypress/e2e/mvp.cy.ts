describe('My MVP Test', () => {
  it('Visits the homepage and performs actions', () => {
    // Arrange: Visit the homepage
    cy.visit('http://localhost:3000');
    cy.contains('Paolo Ventura'); // Example assertion, replace with an element you expect to find on the page

    // Act: Perform actions
    cy.get('[data-cy="nav-link-contact"]').click();
    cy.get('#name').clear().type('asdfsaf');
    cy.get('[data-cy="submit-contact-form"]').click();

    // Assert: Check that an error appears
    cy.get(':nth-child(3) > .error').should(
      'have.text',
      'String must contain at least 10 character(s)'
    );
    cy.get('#contact > .close').click();
    // Assert: Check the error has disappeared
    cy.get('[data-cy="nav-link-contact"]').click();
    cy.get(':nth-child(3) > .error').should('not.exist');
  });
});