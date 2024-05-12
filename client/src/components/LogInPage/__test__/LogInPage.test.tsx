import LogInPage from '../LogInPage';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('LogInPage', () => {
	it('should render component.', () => {
		render(<LogInPage />);
		const logInPage = screen.getByTestId('log-in-page');

		expect(logInPage).toBeInTheDocument();
	});
});
