import { Routes, Route } from 'react-router-dom';
import LogInPage from './components/LogInPage/LogInPage';

function Router() {
	return (
		<Routes>
			<Route path="/log-in" element={<LogInPage />} />
		</Routes>
	);
}

export default Router;
