import SignUpContent from '../SignUpContent';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('SignUpContent', () => {
	it('should render component.', () => {
		render(<SignUpContent />);
		const signUpContent = screen.getByTestId('sign-up-content');

		expect(signUpContent).toBeInTheDocument();
	});
});
