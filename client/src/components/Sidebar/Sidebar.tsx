import { Link } from 'react-router-dom';
import LogOut from '../LogOut/LogOut';
import NavItem from '../NavItem/NavItem';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';
import api from '../../axiosConfig';
import { useEffect } from 'react';
import { storeUser } from '../../redux/state/userSlice';
import { User } from '../../../types.ts';

function Sidebar() {
	const location = useSelector((state: IRootState) => state.location.value);
	const user: User | object = useSelector(
		(state: IRootState) => state.user.value
	);

	const dispatch = useDispatch();

	useEffect(() => {
		const getUserInfo = async () => {
			try {
				const response = await api.get('/users', {
					headers: {
						Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
					},
				});

				dispatch(storeUser(response.data));
			} catch (error) {
				console.log(error);
			}
		};

		getUserInfo();
	}, []);

	return (
		<section data-testid="sidebar">
			<h1>SpotMe</h1>
			<img src="" alt="" />
			<span>{Object.keys(user).length > 0 && (user as User).username}</span>
			<span>{Object.keys(user).length > 0 && (user as User).balance}</span>
			<form>
				<button>Pay</button>
			</form>
			<nav>
				<ul className="nav">
					<NavItem className={location === '/friends' ? 'active' : ''}>
						<Link to="/friends">Friends</Link>
					</NavItem>
					<NavItem className={location === '/' ? 'active' : ''}>
						<Link to="/">Feed</Link>
					</NavItem>
					<NavItem>
						<LogOut />
					</NavItem>
				</ul>
			</nav>
		</section>
	);
}

export default Sidebar;
