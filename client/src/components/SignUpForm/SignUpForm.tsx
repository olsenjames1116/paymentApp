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

	return (
		<form data-testid="sign-up-form" noValidate>
			<UsernameInput />
			<PasswordInput />
			<ConfirmPasswordInput />
			<FormSubmitButton text="Sign Up" handleClick={validateInput} />
		</form>
	);
}

export default SignUpForm;
