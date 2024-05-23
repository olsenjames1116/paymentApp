describe('HomePage', () => {
	it('should redirect user back to log in page if they are not logged in.', () => {
		cy.visit('http://localhost:5173');

		cy.wait(500);

		cy.url().should('match', /\/log-in$/);
	});
});
