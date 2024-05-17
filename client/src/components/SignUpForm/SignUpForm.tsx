import { useDispatch, useSelector } from 'react-redux';
import { removeUsername, storeUsername } from '../../redux/state/usernameSlice';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import { useEffect, useRef } from 'react';
import { removePassword, storePassword } from '../../redux/state/passwordSlice';
import {
	removeConfirmPassword,
	storeConfirmPassword,
} from '../../redux/state/confirmPasswordSlice';
import {
	removeInvalidUsernameFeedback,
	storeInvalidUsernameFeedback,
} from '../../redux/state/invalidUsernameFeedbackSlice';
import { IRootState } from '../../redux/store';
import {
	removeInvalidPasswordFeedback,
	storeInvalidPasswordFeedback,
} from '../../redux/state/invalidPasswordFeedbackSlice';
import {
	removeInvalidConfirmPasswordFeedback,
	storeInvalidConfirmPasswordFeedback,
} from '../../redux/state/invalidConfirmPasswordFeedbackSlice';
import AuthenticationInput from '../AuthenticationInput/AuthenticationInput';

function SignUpForm() {
	const invalidUsernameFeedback = useSelector(
		(state: IRootState) => state.invalidUsernameFeedback.value
	);
	const invalidPasswordFeedback = useSelector(
		(state: IRootState) => state.invalidPasswordFeedback.value
	);
	const invalidConfirmPasswordFeedback = useSelector(
		(state: IRootState) => state.invalidConfirmPasswordFeedback.value
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
		dispatch(removeInvalidUsernameFeedback());
		dispatch(removeInvalidPasswordFeedback());
		dispatch(removeInvalidConfirmPasswordFeedback());
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

	const passwordValidityCheck = () => {
		if (passwordRef.current?.validity.valueMissing) {
			dispatch(storeInvalidPasswordFeedback('Password must not be empty.'));
		}

		if (passwordRef.current?.validity.tooLong) {
			dispatch(
				storeInvalidPasswordFeedback(
					'Password must be less than 50 characters.'
				)
			);
		}
	};

	const confirmPasswordValidityCheck = () => {
		if (confirmPasswordRef.current?.validity.valueMissing) {
			dispatch(
				storeInvalidConfirmPasswordFeedback(
					'Confirmation password must not be empty.'
				)
			);
		}

		if (confirmPasswordRef.current?.validity.tooLong) {
			dispatch(
				storeInvalidConfirmPasswordFeedback(
					'Confirmation password must be less than 50 characters.'
				)
			);
		}
	};

	const displayInvalidMessages = () => {
		usernameValidityCheck();
		passwordValidityCheck();
		confirmPasswordValidityCheck();
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
			<AuthenticationInput
				inputName="username"
				testid="username"
				label="Username"
				handleChange={updateInputInState}
				invalidFeedback={invalidUsernameFeedback}
				elementRef={usernameRef}
			/>
			<AuthenticationInput
				inputName="password"
				testid="password"
				label="Password"
				handleChange={updateInputInState}
				invalidFeedback={invalidPasswordFeedback}
				elementRef={passwordRef}
			/>
			<AuthenticationInput
				inputName="confirmPassword"
				testid="confirm-password"
				label="Confirmation Password"
				handleChange={updateInputInState}
				invalidFeedback={invalidConfirmPasswordFeedback}
				elementRef={confirmPasswordRef}
			/>
			<FormSubmitButton text="Sign Up" />
		</form>
	);
}

export default SignUpForm;
