import EditUserForm from '../EditUserForm';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestWrapper from '../../../utils/TestWrapper';

const MockEditUserForm = () => {
	return (
		<TestWrapper>
			<EditUserForm />
		</TestWrapper>
	);
};

describe('EditUserForm', () => {
	it('should render component.', () => {
		render(<MockEditUserForm />);
		const editUserForm = screen.getByTestId('edit-user-form');

		expect(editUserForm).toBeInTheDocument();
	});
});
