import SignUpForm from '../SignUpForm';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestWrapper from '../../../utils/TestWrapper';

const MockSignUpForm = () => {
	return (
		<TestWrapper>
			<SignUpForm />
		</TestWrapper>
	);
};

describe('SignUpForm', () => {
	it('should render component.', () => {
		render(<MockSignUpForm />);
		const signUpForm = screen.getByTestId('sign-up-form');

		expect(signUpForm).toBeInTheDocument();
	});
});
