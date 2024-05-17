interface PasswordInputProps {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	invalidFeedback: string[];
	elementRef: React.RefObject<HTMLInputElement>;
}

function PasswordInput({
	handleChange,
	elementRef,
	invalidFeedback,
}: PasswordInputProps) {
	return (
		<div className="form-floating" data-testid="password-input-container">
			<input
				type="password"
				name="password"
				id="password"
				data-testid="password-input"
				placeholder=""
				className="form-control"
				onChange={(event) => handleChange(event)}
				ref={elementRef}
				maxLength={50}
				required
			/>
			<label htmlFor="password">Password</label>
			<ul className="invalid-feedback">
				{invalidFeedback.map((feedback, index) => {
					return <li key={index}>{feedback}</li>;
				})}
			</ul>
		</div>
	);
}

export default PasswordInput;
