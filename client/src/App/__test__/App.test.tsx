import App from '../App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const MockApp = () => {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
};

describe('App', () => {
	it('should render component.', () => {
		render(<MockApp />);
		const app = screen.getByTestId('app');

		expect(app).toBeInTheDocument();
	});
});
