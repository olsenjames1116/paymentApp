import SignUpContent from '../SignUpContent';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const MockSignUpContent = () => {
	return (
		<BrowserRouter>
			<SignUpContent />
		</BrowserRouter>
	);
};

describe('SignUpContent', () => {
	it('should render component.', () => {
		render(<MockSignUpContent />);
		const signUpContent = screen.getByTestId('sign-up-content');

		expect(signUpContent).toBeInTheDocument();
	});
});
