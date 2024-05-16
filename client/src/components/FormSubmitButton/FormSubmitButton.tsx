interface FormSubmitButton {
	text: string;
}

function FormSubmitButton({ text }: FormSubmitButton) {
	return (
		<button data-testid="form-submit-button" className="btn btn-primary">
			{text}
		</button>
	);
}

export default FormSubmitButton;
