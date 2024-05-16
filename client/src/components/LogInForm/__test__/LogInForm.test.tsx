import LogInForm from '../LogInForm';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestWrapper from '../../../utils/TestWrapper';

const MockLogInForm = () => {
	return (
		<TestWrapper>
			<LogInForm />
		</TestWrapper>
	);
};

describe('LogInForm', () => {
	it('should render component.', () => {
		render(<MockLogInForm />);
		const logInForm = screen.getByTestId('log-in-form');

		expect(logInForm).toBeInTheDocument();
	});
});
