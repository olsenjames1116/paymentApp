import { useDispatch } from 'react-redux';
import { removeUsername, storeUsername } from '../../redux/state/usernameSlice';
import ConfirmPasswordInput from '../ConfirmPasswordInput/ConfirmPasswordInput';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import PasswordInput from '../PasswordInput/PasswordInput';
import UsernameInput from '../UsernameInput/UsernameInput';
import { useEffect } from 'react';
import { removePassword, storePassword } from '../../redux/state/passwordSlice';

function SignUpForm() {
	const dispatch = useDispatch();

	const clearInputs = () => {
		dispatch(removeUsername());
		dispatch(removePassword());
	};

	useEffect(() => {
		clearInputs();
	});

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
				dispatch(storeUsername(value));
				break;
			case 'password':
				dispatch(storePassword(value));
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
