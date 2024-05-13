import ConfirmPasswordInput from '../ConfirmPasswordInput/ConfirmPasswordInput';
import PasswordInput from '../PasswordInput/PasswordInput';
import UsernameInput from '../UsernameInput/UsernameInput';

function SignUpForm() {
	return (
		<form data-testid="sign-up-form" noValidate>
			<UsernameInput />
			<PasswordInput />
			<ConfirmPasswordInput />
		</form>
	);
}

export default SignUpForm;
