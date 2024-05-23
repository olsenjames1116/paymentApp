import { Link } from 'react-router-dom';
import LogOut from '../LogOut/LogOut';
import NavItem from '../NavItem/NavItem';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';
import api from '../../axiosConfig';
import { useEffect } from 'react';

function Sidebar() {
	const location = useSelector((state: IRootState) => state.location.value);

	useEffect(() => {
		const getUserInfo = async () => {
			try {
				const userInfo = await api.get('/user', {
					headers: { Authorization: sessionStorage.getItem('access_token') },
				});

				console.log(userInfo);
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
			<span>Username</span>
			<span>Balance</span>
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
