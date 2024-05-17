import 'bootstrap/dist/css/bootstrap.min.css';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { removeUsername, storeUsername } from '../../redux/state/usernameSlice';
import { removePassword, storePassword } from '../../redux/state/passwordSlice';
import { removeConfirmPassword } from '../../redux/state/confirmPasswordSlice';

function LogInForm() {
	const dispatch = useDispatch();

	const clearInputs = () => {
		dispatch(removeUsername());
		dispatch(removePassword());
		dispatch(removeConfirmPassword());
	};

	useEffect(() => {
		clearInputs();
	}, []);

	const validateInput = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log('log in');
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
			default:
				console.log('None of the input ids matched.');
		}
	};

	return (
		<form
			data-testid="log-in-form"
			noValidate
			className="col"
			onSubmit={(event) => validateInput(event)}
		>
			<FormSubmitButton text="Log In" />
		</form>
	);
}

export default LogInForm;
