import FormSubmitButton from '../FormSubmitButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestWrapper from '../../../utils/TestWrapper';

interface FormSubmitButtonProps {
	text: string;
	handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const MockFormSubmitButton = ({ text, handleClick }: FormSubmitButtonProps) => {
	return (
		<TestWrapper>
			<FormSubmitButton text={text} handleClick={handleClick} />
		</TestWrapper>
	);
};

describe('FormSubmitButton', () => {
	it('should render component.', () => {
		render(<MockFormSubmitButton text="" handleClick={() => {}} />);
		const formSubmitButton = screen.getByTestId('form-submit-button');

		expect(formSubmitButton).toBeInTheDocument();
	});
});
FormSubmitButton;
