import { useDispatch, useSelector } from 'react-redux';
import { storeImage } from '../../redux/state/imageSlice';
import { IRootState } from '../../redux/store';

function FileInput() {
	const image = useSelector((state: IRootState) => state.image.value);

	const dispatch = useDispatch();

	const storeInState = (files: FileList) => {
		dispatch(storeImage(URL.createObjectURL(files[0])));
	};

	const validateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target;

		if (files) {
			const imageRegExp = /image/i;

			if (imageRegExp.test(files[0].type)) {
				storeInState(files);
			} else {
				console.log('not an image');
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
			/>
		</div>
	);
}

export default FileInput;
