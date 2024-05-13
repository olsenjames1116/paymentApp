import PasswordInput from '../PasswordInput';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('PasswordInput', () => {
	it('should render component.', () => {
		render(<PasswordInput handleChange={vi.fn()} />);
		const passwordInputContainer = screen.getByTestId(
			'password-input-container'
		);

		expect(passwordInputContainer).toBeInTheDocument();
	});

	it('should render component.', async () => {
		const mockHandleChange = vi.fn();
		render(<PasswordInput handleChange={mockHandleChange} />);
		const passwordInput = screen.getByTestId('password-input');

		await userEvent.type(passwordInput, 'password');

		expect(mockHandleChange).toHaveBeenCalledTimes(8);
	});
});
