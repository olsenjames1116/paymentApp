describe('SignUpPage', () => {
	it('should display an alert with a success message if the user is signed up successfully.', () => {
		cy.visit('http://localhost:5173/sign-up');

		cy.get('[data-testid="username-input"]').type('testUser');
		cy.get('[data-testid="password-input"]').type('password');
		cy.get('[data-testid="confirm-password-input"]').type('password');
		cy.get('[data-testid="form-submit-button"]').click();

		cy.on('window:alert', (str) => {
			expect(str).to.contain('Account created.');
		});
	});

	// should display an error message if the username is empty.
	// should display an error message if the username is too long.
	// should display an error message if a user tries to use an existing username.
	// should display an error message if the password is empty.
	// should display an error message if the password is too long.
	// should display an error message if the confirmation password is empty.
	// should display an error message if the confirmation password is too long.
	// should display an error message if the passwords do not match.
	// should redirect the user to the home page if they are logged in.
});
