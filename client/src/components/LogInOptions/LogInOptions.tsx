import { Link } from 'react-router-dom';
import DemoAccountLogIn from '../DemoAccountLogIn/DemoAccountLogIn';

function LogInOptions() {
	const logInDemoAccount = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.preventDefault();
		console.log('demo');
	};

	return (
		<ul data-testid="log-in-options">
			<li>
				<Link to="/sign-up" className="btn-link btn-outline-primary">
					Sign Up
				</Link>
			</li>
			<li>
				<DemoAccountLogIn handleClick={logInDemoAccount} />
			</li>
		</ul>
	);
}

export default LogInOptions;
