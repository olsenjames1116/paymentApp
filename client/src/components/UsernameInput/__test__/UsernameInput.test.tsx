import UsernameInput from '../UsernameInput';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('UsernameInput', () => {
	it('should render component.', () => {
		render(<UsernameInput handleChange={vi.fn()} />);
		const usernameInputContainer = screen.getByTestId(
			'username-input-container'
		);

		expect(usernameInputContainer).toBeInTheDocument();
	});

	it('should render component.', async () => {
		const mockHandleChange = vi.fn();
		render(<UsernameInput handleChange={mockHandleChange} />);
		const usernameInput = screen.getByTestId('username-input');

		await userEvent.type(usernameInput, 'username');

		expect(mockHandleChange).toHaveBeenCalledTimes(8);
	});
});
