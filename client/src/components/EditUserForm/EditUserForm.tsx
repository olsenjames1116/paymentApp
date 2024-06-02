import { useSelector } from 'react-redux';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import { IRootState } from '../../redux/store';
import { User } from '../../../types';
import FileInput from '../FileInput/FileInput';

function EditUserForm() {
	const user: User | object = useSelector(
		(state: IRootState) => state.user.value
	);

	return (
		<form data-testid="edit-user-form">
			<FileInput />
			<input
				type="text"
				className="form-control"
				placeholder={(user as User).username}
				disabled
			/>
			<input
				type="text"
				className="form-control"
				placeholder="Email"
				disabled
			/>
			<input
				type="text"
				className="form-control"
				placeholder="Phone"
				disabled
			/>
			<FormSubmitButton text="Submit" />
		</form>
	);
}

export default EditUserForm;
