import LogInForm from '../LogInForm';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('LogInForm', () => {
	it('should render component.', () => {
		render(<LogInForm />);
		const logInForm = screen.getByTestId('log-in-form');

		expect(logInForm).toBeInTheDocument();
	});
});
