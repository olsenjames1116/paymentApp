describe('LogInPage', () => {
	it('should route the user to the home page after a successful log in.', () => {
		cy.login();

		cy.url().should('match', /\/$/);
	});

	it('should display an error message if the inputs are empty.', () => {
		cy.visit('http://localhost:5173/log-in');

		cy.get('[data-testid="form-submit-button"]').click();

		cy.get('[data-testid="username-input-invalid-feedback"]')
			.find('li')
			.should('have.text', 'Username must not be empty.');
		cy.get('[data-testid="password-input-invalid-feedback"]')
			.find('li')
			.should('have.text', 'Password must not be empty.');
	});
	// should display an error message if the username does not exist in the database.
	// should display an error if the password does not match the one stored in the database.
	// should navigate the user to the home page if they are logged in.
});
