import FileInput from '../FileInput';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestWrapper from '../../../utils/TestWrapper';
import { vi } from 'vitest';

interface Props {
	formRef: React.RefObject<HTMLFormElement>;
	setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const mockRef = {
	current: null,
};

const MockFileInput = ({ formRef, setDisabled }: Props) => {
	return (
		<TestWrapper>
			<FileInput formRef={formRef} setDisabled={setDisabled} />
		</TestWrapper>
	);
};

describe('FileInput', () => {
	it('should render component.', () => {
		render(<MockFileInput formRef={mockRef} setDisabled={vi.fn()} />);
		const fileInputContainer = screen.getByTestId('file-input-container');

		expect(fileInputContainer).toBeInTheDocument();
	});
});
