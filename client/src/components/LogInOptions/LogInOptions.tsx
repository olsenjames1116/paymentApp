import { Link } from 'react-router-dom';

function LogInOptions() {
	return (
		<ul data-testid="log-in-options">
			<li>
				<Link to="/sign-up" className="btn-link btn-outline-primary">
					Sign Up
				</Link>
			</li>
			<li></li>
		</ul>
	);
}

export default LogInOptions;
