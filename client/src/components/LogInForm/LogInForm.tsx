import 'bootstrap/dist/css/bootstrap.min.css';
import UsernameInput from '../UsernameInput/UsernameInput';
import PasswordInput from '../PasswordInput/PasswordInput';

function LogInForm() {
	return (
		<form data-testid="log-in-form" noValidate className="col">
			<UsernameInput />
			<PasswordInput />
			<button className="btn-primary">Log In</button>
		</form>
	);
}

export default LogInForm;
