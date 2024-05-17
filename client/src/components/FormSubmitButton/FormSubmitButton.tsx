interface FormSubmitButton {
	text: string;
}

/* Represents the component to submit form data on the log in 
and sign up pages. */
function FormSubmitButton({ text }: FormSubmitButton) {
	return (
		<button data-testid="form-submit-button" className="btn btn-primary">
			{text}
		</button>
	);
}

export default FormSubmitButton;
