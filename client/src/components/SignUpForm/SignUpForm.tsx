import { useDispatch, useSelector } from 'react-redux';
import { removeUsername, storeUsername } from '../../redux/state/usernameSlice';
import ConfirmPasswordInput from '../ConfirmPasswordInput/ConfirmPasswordInput';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import PasswordInput from '../PasswordInput/PasswordInput';
import UsernameInput from '../UsernameInput/UsernameInput';
import { useEffect, useRef } from 'react';
import { removePassword, storePassword } from '../../redux/state/passwordSlice';
import {
	removeConfirmPassword,
	storeConfirmPassword,
} from '../../redux/state/confirmPasswordSlice';
import { storeInvalidUsernameFeedback } from '../../redux/state/invalidUsernameFeedbackSlice';
import { IRootState } from '../../redux/store';

function SignUpForm() {
	const invalidUsernameFeedback = useSelector(
		(state: IRootState) => state.invalidUsernameFeedback.value
	);
	const dispatch = useDispatch();

	const formRef = useRef<HTMLFormElement>(null);
	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const confirmPasswordRef = useRef<HTMLInputElement>(null);

	const clearInputs = () => {
		dispatch(removeUsername());
		dispatch(removePassword());
		dispatch(removeConfirmPassword());
	};

	useEffect(() => {
		clearInputs();
	}, []);

	const usernameValidityCheck = () => {
		if (!usernameRef.current?.checkValidity()) {
			if (usernameRef.current?.validity.valueMissing) {
				dispatch(storeInvalidUsernameFeedback('Username must not be empty.'));
			}

			if (usernameRef.current?.validity.tooLong) {
				dispatch(
					storeInvalidUsernameFeedback(
						'Username must be less than 50 characters.'
					)
				);
			}
		}
	};

	const displayInvalidMessages = () => {
		usernameValidityCheck();
	};

	const validateInput = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		clearInputs();

		formRef.current?.classList.add('was-validated');

		if (!formRef.current?.checkValidity()) {
			displayInvalidMessages();
		} else {
			console.log('valid form');
		}
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
				dispatch(storeConfirmPassword(value));
				break;
			default:
				console.log('None of the input ids matched.');
		}
	};

	return (
		<form
			data-testid="sign-up-form"
			noValidate
			onSubmit={(event) => validateInput(event)}
			ref={formRef}
		>
			<UsernameInput
				handleChange={updateInputInState}
				invalidFeedback={invalidUsernameFeedback}
				usernameRef={usernameRef}
			/>
			<PasswordInput
				handleChange={updateInputInState}
				passwordRef={passwordRef}
			/>
			<ConfirmPasswordInput
				handleChange={updateInputInState}
				confirmPasswordRef={confirmPasswordRef}
			/>
			<FormSubmitButton text="Sign Up" />
		</form>
	);
}

export default SignUpForm;
