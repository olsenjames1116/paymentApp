import 'bootstrap/dist/css/bootstrap.min.css';
import UsernameInput from '../UsernameInput/UsernameInput';
import PasswordInput from '../PasswordInput/PasswordInput';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';

function LogInForm() {
	const validateInput = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.preventDefault();
		console.log('log in');
	};

	return (
		<form data-testid="log-in-form" noValidate className="col">
			<UsernameInput />
			<PasswordInput />
			<FormSubmitButton text="Log In" handleClick={validateInput} />
		</form>
	);
}

export default LogInForm;
