import ConfirmPasswordInput from '../ConfirmPasswordInput/ConfirmPasswordInput';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import PasswordInput from '../PasswordInput/PasswordInput';
import UsernameInput from '../UsernameInput/UsernameInput';

function SignUpForm() {
	return (
		<form data-testid="sign-up-form" noValidate>
			<UsernameInput />
			<PasswordInput />
			<ConfirmPasswordInput />
			<FormSubmitButton text="Sign Up" />
		</form>
	);
}

export default SignUpForm;
