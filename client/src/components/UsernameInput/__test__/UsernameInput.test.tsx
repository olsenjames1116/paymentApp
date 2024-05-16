import UsernameInput from '../UsernameInput';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import TestWrapper from '../../../utils/TestWrapper';

interface UsernameInputProps {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MockUsernameInput = ({ handleChange }: UsernameInputProps) => {
	return (
		<TestWrapper>
			<UsernameInput handleChange={handleChange} />
		</TestWrapper>
	);
};

describe('UsernameInput', () => {
	it('should render component.', () => {
		render(<MockUsernameInput handleChange={vi.fn()} />);
		const usernameInputContainer = screen.getByTestId(
			'username-input-container'
		);

		expect(usernameInputContainer).toBeInTheDocument();
	});

	it('should call handleChange when input is typed in.', async () => {
		const mockHandleChange = vi.fn();
		render(<MockUsernameInput handleChange={mockHandleChange} />);
		const usernameInput = screen.getByTestId('username-input');

		await userEvent.type(usernameInput, 'username');

		expect(mockHandleChange).toHaveBeenCalledTimes(8);
	});
});
