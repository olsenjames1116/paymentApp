import LogInOptions from '../LogInOptions';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const MockLogInOptions = () => {
	return (
		<BrowserRouter>
			<LogInOptions />
		</BrowserRouter>
	);
};

describe('LogInOptions', () => {
	it('should render component.', () => {
		render(<MockLogInOptions />);
		const logInOptions = screen.getByTestId('log-in-options');

		expect(logInOptions).toBeInTheDocument();
	});
});
