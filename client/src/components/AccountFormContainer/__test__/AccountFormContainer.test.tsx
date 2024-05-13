import AccountFormContainer from '../AccountFormContainer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('AccountFormContainer', () => {
	it('should render component.', () => {
		render(<AccountFormContainer children={<div />} />);
		const accountFormContainer = screen.getByTestId('account-form-container');

		expect(accountFormContainer).toBeInTheDocument();
	});
});
