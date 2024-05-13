import DemoAccountLogIn from '../DemoAccountLogIn';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

describe('DemoAccountLogIn', () => {
	it('should render component.', () => {
		render(<DemoAccountLogIn handleClick={vi.fn()} />);
		const logInOptions = screen.getByTestId('demo-account-log-in');

		expect(logInOptions).toBeInTheDocument();
	});
});
