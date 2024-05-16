import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

interface TestWrapperProps {
	children: React.ReactNode;
}

function TestWrapper({ children }: TestWrapperProps) {
	return (
		<Provider store={store}>
			<BrowserRouter>{children}</BrowserRouter>
		</Provider>
	);
}

export default TestWrapper;
