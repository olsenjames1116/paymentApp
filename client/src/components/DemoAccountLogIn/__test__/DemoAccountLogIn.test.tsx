import DemoAccountLogIn from '../DemoAccountLogIn';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import TestWrapper from '../../../utils/TestWrapper';

interface DemoAccountLogInProps {
	handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const MockDemoAccountLogIn = ({ handleClick }: DemoAccountLogInProps) => {
	return (
		<TestWrapper>
			<DemoAccountLogIn handleClick={handleClick} />
		</TestWrapper>
	);
};

describe('DemoAccountLogIn', () => {
	it('should render component.', () => {
		render(<MockDemoAccountLogIn handleClick={vi.fn()} />);
		const demoAccountLogIn = screen.getByTestId('demo-account-log-in');

		expect(demoAccountLogIn).toBeInTheDocument();
	});

	it('should call handleClick when clicked.', async () => {
		const mockHandleClick = vi.fn();
		render(<MockDemoAccountLogIn handleClick={mockHandleClick} />);
		const demoAccountLogIn = screen.getByTestId('demo-account-log-in');

		await userEvent.click(demoAccountLogIn);

		expect(mockHandleClick).toHaveBeenCalled();
	});
});
