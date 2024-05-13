import { Routes, Route } from 'react-router-dom';
import LogInPage from './components/LogInPage/LogInPage';
import SignUpPage from './components/SignUpPage/SignUpPage';

function Router() {
	return (
		<Routes>
			<Route path="/log-in" element={<LogInPage />} />
			<Route path="/sign-up" element={<SignUpPage />} />
		</Routes>
	);
}

export default Router;
