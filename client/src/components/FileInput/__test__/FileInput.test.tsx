import FileInput from '../FileInput';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestWrapper from '../../../utils/TestWrapper';

const MockFileInput = () => {
	return (
		<TestWrapper>
			<FileInput />
		</TestWrapper>
	);
};

describe('FileInput', () => {
	it('should render component.', () => {
		render(<MockFileInput />);
		const fileInputContainer = screen.getByTestId('file-input-container');

		expect(fileInputContainer).toBeInTheDocument();
	});
});
