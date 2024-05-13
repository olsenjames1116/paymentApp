import UsernameInput from '../UsernameInput';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('UsernameInput', () => {
	it('should render component.', () => {
		render(<UsernameInput />);
		const usernameInputContainer = screen.getByTestId(
			'username-input-container'
		);

		expect(usernameInputContainer).toBeInTheDocument();
	});
});
