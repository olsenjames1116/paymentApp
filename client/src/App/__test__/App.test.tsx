import App from '../App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App', () => {
	it('should render component.', () => {
		render(<App />);
		const app = screen.getByTestId('app');

		expect(app).toBeInTheDocument();
	});
});
