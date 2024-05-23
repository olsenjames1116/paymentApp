import { Link } from 'react-router-dom';
import LogOut from '../LogOut/LogOut';

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
					<li>
						<Link to="/friends">Friends</Link>
					</li>
					<li>
						<Link to="/">Feed</Link>
					</li>
					<li>
						<LogOut />
					</li>
				</ul>
			</nav>
		</section>
	);
}

export default Sidebar;
