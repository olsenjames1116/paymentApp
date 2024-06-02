import { useSelector } from 'react-redux';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import { IRootState } from '../../redux/store';
import { User } from '../../../types';
import FileInput from '../FileInput/FileInput';
import { useRef, useState } from 'react';

function EditUserForm() {
	const user: User | object = useSelector(
		(state: IRootState) => state.user.value
	);

	const formRef = useRef<HTMLFormElement>(null);

	const [disabled, setDisabled] = useState(false);

	return (
		<form ref={formRef} data-testid="edit-user-form">
			<FileInput formRef={formRef} setDisabled={setDisabled} />
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
			<FormSubmitButton text="Submit" disabled={disabled} />
		</form>
	);
}

export default EditUserForm;
