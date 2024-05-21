import { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';

function HomePage() {
	const navigate = useNavigate();

	useEffect(() => {
		if (sessionStorage.length < 1) {
			navigate('/log-in');
		}
	}, []);

	return (
		<div data-testid="home-page">
			<Sidebar />
		</div>
	);
}

export default HomePage;
