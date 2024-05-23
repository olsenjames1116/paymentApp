import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { storeLocation } from '../../redux/state/locationSlice';
import Sidebar from '../Sidebar/Sidebar';

function FriendsPage() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (sessionStorage.length < 1) {
			navigate('/log-in');
		} else {
			document.title = 'Friends';
			dispatch(storeLocation(window.location.pathname));
		}
	}, []);

	return (
		<div data-testid="friends-page">
			<Sidebar />
			FriendsPage
		</div>
	);
}

export default FriendsPage;
