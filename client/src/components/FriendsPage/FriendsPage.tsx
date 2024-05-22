import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function FriendsPage() {
	const navigate = useNavigate();

	useEffect(() => {
		if (sessionStorage.length < 1) {
			navigate('/log-in');
		}
	}, []);

	return <div data-testid="friends-page">FriendsPage</div>;
}

export default FriendsPage;
