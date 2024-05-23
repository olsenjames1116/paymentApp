import FormSubmitButton from '../FormSubmitButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestWrapper from '../../../utils/TestWrapper';

interface Props {
	text: string;
}

const MockFormSubmitButton = ({ text }: Props) => {
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

	it('should match the text content with the text prop.', () => {
		render(<MockFormSubmitButton text="Test Button" />);
		const formSubmitButton = screen.getByTestId('form-submit-button');

		expect(formSubmitButton).toHaveTextContent(/test button/i);
	});
});
FormSubmitButton;
