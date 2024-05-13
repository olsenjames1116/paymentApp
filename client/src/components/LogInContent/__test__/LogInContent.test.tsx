import LogInContent from '../LogInContent';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const MockLogInContent = () => {
	return (
		<BrowserRouter>
			<LogInContent />
		</BrowserRouter>
	);
};

describe('LogInContent', () => {
	it('should render component.', () => {
		render(<MockLogInContent />);
		const logInContent = screen.getByTestId('log-in-content');

		expect(logInContent).toBeInTheDocument();
	});
});
