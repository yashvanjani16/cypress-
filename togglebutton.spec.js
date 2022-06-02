context('Actions', () => {
  it('visit',() => {
    cy.visit('https://manage.eloview.com/3.56.50');
    cy.get('#username').type('bob@gmail.com');
    cy.get('#password').type('bob@11');
    cy.get('#loginUser').click();
  });
});