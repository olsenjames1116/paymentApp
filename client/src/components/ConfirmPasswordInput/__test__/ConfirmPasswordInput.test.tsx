import ConfirmPasswordInput from '../ConfirmPasswordInput';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

describe('ConfirmPasswordInput', () => {
	it('should render component.', () => {
		render(<ConfirmPasswordInput handleChange={vi.fn()} />);
		const confirmPasswordInputContainer = screen.getByTestId(
			'confirm-password-input-container'
		);

		expect(confirmPasswordInputContainer).toBeInTheDocument();
	});

	it('should call handleChange when input is typed in.', async () => {
		const mockHandleChange = vi.fn();
		render(<ConfirmPasswordInput handleChange={mockHandleChange} />);
		const confirmPasswordInput = screen.getByTestId('confirm-password-input');

		await userEvent.type(confirmPasswordInput, 'password');

		expect(mockHandleChange).toHaveBeenCalledTimes(8);
	});
});
