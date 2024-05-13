import PasswordInput from '../PasswordInput';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('PasswordInput', () => {
	it('should render component.', () => {
		render(<PasswordInput />);
		const passwordInputContainer = screen.getByTestId(
			'password-input-container'
		);

		expect(passwordInputContainer).toBeInTheDocument();
	});
});
