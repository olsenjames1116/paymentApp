import LogInPage from '../LogInPage';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const MockLogInPage = () => {
	return (
		<BrowserRouter>
			<LogInPage />
		</BrowserRouter>
	);
};

describe('LogInPage', () => {
	it('should render component.', () => {
		render(<MockLogInPage />);
		const logInPage = screen.getByTestId('log-in-page');

		expect(logInPage).toBeInTheDocument();
	});
});
