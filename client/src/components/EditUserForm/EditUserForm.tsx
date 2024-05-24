import { useDispatch, useSelector } from 'react-redux';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import { storeImage } from '../../redux/state/imageSlice';
import { IRootState } from '../../redux/store';

function EditUserForm() {
	const image = useSelector((state: IRootState) => state.image.value);
	// const user = useSelector((state: IRootState) => state.user.value);

	const dispatch = useDispatch();

	const validateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target;

		if (files) {
			dispatch(storeImage(URL.createObjectURL(files[0])));
		}
	};

	return (
		<form data-testid="edit-user-form">
			<img src={image} alt="" className="w-14 h-14" />
			<input
				type="file"
				className="form-control-md"
				onChange={(event) => validateInput(event)}
			/>
			<input
				type="text"
				className="form-control"
				placeholder="hello"
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
