import PasswordInput from '../PasswordInput';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

describe('PasswordInput', () => {
	it('should render component.', () => {
		render(<PasswordInput handleChange={vi.fn()} />);
		const passwordInputContainer = screen.getByTestId(
			'password-input-container'
		);

		expect(passwordInputContainer).toBeInTheDocument();
	});
});
