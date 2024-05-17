interface AuthenticationInputProps {
	testid: string;
	inputName: string;
	label: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	invalidFeedback: string[];
	elementRef: React.RefObject<HTMLInputElement>;
}

function AuthenticationInput({
	inputName,
	testid,
	label,
	handleChange,
	invalidFeedback,
	elementRef,
}: AuthenticationInputProps) {
	return (
		<div className="form-floating" data-testid={`${testid}-input-container`}>
			<input
				type={inputName}
				name={inputName}
				id={inputName}
				data-testid={`${testid}-input`}
				placeholder=""
				className="form-control"
				onChange={(event) => handleChange(event)}
				ref={elementRef}
				maxLength={50}
				required
			/>
			<label htmlFor={inputName} data-testid={`${testid}-input-label`}>
				{label}
			</label>
			<ul
				className="invalid-feedback"
				data-testid={`${testid}-input-invalid-feedback`}
			>
				{invalidFeedback.map((feedback, index) => {
					return <li key={index}>{feedback}</li>;
				})}
			</ul>
		</div>
	);
}

export default AuthenticationInput;
