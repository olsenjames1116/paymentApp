import { useSelector } from 'react-redux';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import { IRootState } from '../../redux/store';
import { User } from '../../../types';
import FileInput from '../FileInput/FileInput';
import { useRef, useState } from 'react';
import api from '../../axiosConfig';

function EditUserForm() {
	const user: User | object = useSelector(
		(state: IRootState) => state.user.value
	);
	const image = useSelector((state: IRootState) => state.image.value);

	const formRef = useRef<HTMLFormElement>(null);

	const [disabled, setDisabled] = useState(false);

	const createFormData: () => FormData = () => {
		const formData = new FormData();
		formData.append('image', image);

		return formData;
	};

	const submitChanges = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = createFormData();

		try {
			const user = await api.put('/users', formData, {
				headers: {
					Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
				},
			});

			console.log(user);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form
			onSubmit={(event) => submitChanges(event)}
			ref={formRef}
			data-testid="edit-user-form"
		>
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
