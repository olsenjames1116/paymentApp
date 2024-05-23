import { Link } from 'react-router-dom';
import LogOut from '../LogOut/LogOut';
import NavItem from '../NavItem/NavItem';

function Sidebar() {
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
					<NavItem>
						<Link to="/friends">Friends</Link>
					</NavItem>
					<NavItem>
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
