import SignUpOptions from '../SignUpOptions';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const MockSignUpOptions = () => {
	return (
		<BrowserRouter>
			<SignUpOptions />
		</BrowserRouter>
	);
};

describe('SignUpOptions', () => {
	it('should render component.', () => {
		render(<MockSignUpOptions />);
		const logInContent = screen.getByTestId('sign-up-options');

		expect(logInContent).toBeInTheDocument();
	});
});
SignUpOptions;
