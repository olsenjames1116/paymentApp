import LogInContent from '../LogInContent';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('LogInContent', () => {
	it('should render component.', () => {
		render(<LogInContent />);
		const logInContent = screen.getByTestId('log-in-content');

		expect(logInContent).toBeInTheDocument();
	});
});
