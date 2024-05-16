import PasswordInput from '../PasswordInput';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import TestWrapper from '../../../utils/TestWrapper';

interface PasswordInputProps {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MockPasswordInput = ({ handleChange }: PasswordInputProps) => {
	return (
		<TestWrapper>
			<PasswordInput handleChange={handleChange} />
		</TestWrapper>
	);
};

describe('PasswordInput', () => {
	it('should render component.', () => {
		render(<MockPasswordInput handleChange={vi.fn()} />);
		const passwordInputContainer = screen.getByTestId(
			'password-input-container'
		);

		expect(passwordInputContainer).toBeInTheDocument();
	});

	it('should call handleChange when input is typed in.', async () => {
		const mockHandleChange = vi.fn();
		render(<MockPasswordInput handleChange={mockHandleChange} />);
		const passwordInput = screen.getByTestId('password-input');

		await userEvent.type(passwordInput, 'password');

		expect(mockHandleChange).toHaveBeenCalledTimes(8);
	});
});
