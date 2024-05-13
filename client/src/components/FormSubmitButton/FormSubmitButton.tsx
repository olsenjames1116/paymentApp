interface FormSubmitButton {
	text: string;
	handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function FormSubmitButton({ text, handleClick }: FormSubmitButton) {
	return (
		<button
			data-testid="form-submit-button"
			className="btn btn-primary"
			onClick={(event) => handleClick(event)}
		>
			{text}
		</button>
	);
}

export default FormSubmitButton;
