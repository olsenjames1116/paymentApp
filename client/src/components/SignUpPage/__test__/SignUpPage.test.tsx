import SignUpPage from '../SignUpPage';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('SignUpPage', () => {
	it('should render component.', () => {
		render(<SignUpPage />);
		const signUpPage = screen.getByTestId('sign-up-page');

		expect(signUpPage).toBeInTheDocument();
	});
});
