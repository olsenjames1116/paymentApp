import SignUpForm from '../SignUpForm';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('SignUpForm', () => {
	it('should render component.', () => {
		render(<SignUpForm />);
		const signUpForm = screen.getByTestId('sign-up-form');

		expect(signUpForm).toBeInTheDocument();
	});
});
