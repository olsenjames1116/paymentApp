import 'bootstrap/dist/css/bootstrap.min.css';
import UsernameInput from '../UsernameInput/UsernameInput';
import PasswordInput from '../PasswordInput/PasswordInput';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';

function LogInForm() {
	const validateInput = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.preventDefault();
	};

	const updateInputInState = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target;

		switch (id) {
			case 'username':
				console.log(value);
				break;
			case 'password':
				console.log(value);
				break;
			default:
				console.log('None of the input ids matched.');
		}
	};

	return (
		<form data-testid="log-in-form" noValidate className="col">
			<UsernameInput handleChange={updateInputInState} />
			<PasswordInput handleChange={updateInputInState} />
			<FormSubmitButton text="Log In" handleClick={validateInput} />
		</form>
	);
}

export default LogInForm;
