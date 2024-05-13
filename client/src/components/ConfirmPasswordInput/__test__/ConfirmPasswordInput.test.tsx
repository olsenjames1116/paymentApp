import ConfirmPasswordInput from '../ConfirmPasswordInput';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ConfirmPasswordInput', () => {
	it('should render component.', () => {
		render(<ConfirmPasswordInput />);
		const confirmPasswordInputContainer = screen.getByTestId(
			'confirm-password-input-container'
		);

		expect(confirmPasswordInputContainer).toBeInTheDocument();
	});
});
