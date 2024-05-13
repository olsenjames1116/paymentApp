import ConfirmPasswordInput from '../ConfirmPasswordInput/ConfirmPasswordInput';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import PasswordInput from '../PasswordInput/PasswordInput';
import UsernameInput from '../UsernameInput/UsernameInput';

function SignUpForm() {
	const validateInput = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.preventDefault();
		console.log('sign up');
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
			case 'confirmPassword':
				console.log(value);
				break;
			default:
				console.log('None of the input ids matched.');
		}
	};

	return (
		<form data-testid="sign-up-form" noValidate>
			<UsernameInput handleChange={updateInputInState} />
			<PasswordInput handleChange={updateInputInState} />
			<ConfirmPasswordInput handleChange={updateInputInState} />
			<FormSubmitButton text="Sign Up" handleClick={validateInput} />
		</form>
	);
}

export default SignUpForm;
