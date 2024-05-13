import FormSubmitButton from '../FormSubmitButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('FormSubmitButton', () => {
	it('should render component.', () => {
		render(<FormSubmitButton text="" handleClick={() => {}} />);
		const formSubmitButton = screen.getByTestId('form-submit-button');

		expect(formSubmitButton).toBeInTheDocument();
	});
});
FormSubmitButton;
