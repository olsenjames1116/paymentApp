import FormSubmitButton from '../FormSubmitButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestWrapper from '../../../utils/TestWrapper';

interface FormSubmitButtonProps {
	text: string;
}

const MockFormSubmitButton = ({ text }: FormSubmitButtonProps) => {
	return (
		<TestWrapper>
			<FormSubmitButton text={text} />
		</TestWrapper>
	);
};

describe('FormSubmitButton', () => {
	it('should render component.', () => {
		render(<MockFormSubmitButton text="" />);
		const formSubmitButton = screen.getByTestId('form-submit-button');

		expect(formSubmitButton).toBeInTheDocument();
	});
});
FormSubmitButton;
