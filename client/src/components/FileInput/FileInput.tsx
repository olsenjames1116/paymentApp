import { useDispatch, useSelector } from 'react-redux';
import { storeImage } from '../../redux/state/imageSlice';
import { IRootState } from '../../redux/store';
import { useRef } from 'react';

interface Props {
	formRef: React.RefObject<HTMLFormElement>;
	setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

function FileInput({ formRef, setDisabled }: Props) {
	const image = useSelector((state: IRootState) => state.image.value);

	const dispatch = useDispatch();

	const inputRef = useRef<HTMLInputElement>(null);

	// Store the image in state.
	const storeInState = (files: FileList) => {
		dispatch(storeImage(URL.createObjectURL(files[0])));
	};

	// Validate the file.
	const validateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target;
		inputRef.current?.setCustomValidity('');

		// Add Bootstrap class to form.
		formRef.current?.classList.add('was-validated');

		// Check if there are any files and if they are of type image.
		if (files) {
			const imageRegExp = /image/i;

			if (files.length !== 0 && imageRegExp.test(files[0].type)) {
				storeInState(files);
				setDisabled(false);
			} else {
				inputRef.current?.setCustomValidity('invalid');
				setDisabled(true);
			}
		}
	};

	return (
		<div data-testid="file-input-container">
			{image && <img src={image} alt="" className="w-14 h-14" />}
			<input
				type="file"
				className="form-control-md"
				onChange={(event) => validateInput(event)}
				ref={inputRef}
			/>
			<p className="invalid-feedback">File must be an image</p>
		</div>
	);
}

export default FileInput;
