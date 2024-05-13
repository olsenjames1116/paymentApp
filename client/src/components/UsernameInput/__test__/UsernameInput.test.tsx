import UsernameInput from '../UsernameInput';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

describe('UsernameInput', () => {
	it('should render component.', () => {
		render(<UsernameInput handleChange={vi.fn()} />);
		const usernameInputContainer = screen.getByTestId(
			'username-input-container'
		);

		expect(usernameInputContainer).toBeInTheDocument();
	});
});
