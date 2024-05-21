import { Link } from 'react-router-dom';

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
				<ul>
					<li>
						<Link to="/friends">Friends</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
}

export default Sidebar;
