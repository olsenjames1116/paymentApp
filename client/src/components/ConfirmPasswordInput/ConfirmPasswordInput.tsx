interface ConfirmPasswordInputProps {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function ConfirmPasswordInput({ handleChange }: ConfirmPasswordInputProps) {
	return (
		<div
			className="form-floating"
			data-testid="confirm-password-input-container"
		>
			<input
				type="confirmPassword"
				name="confirmPassword"
				id="confirmPassword"
				data-testid="confirm-password-input"
				placeholder=""
				className="form-control"
				onChange={(event) => handleChange(event)}
				maxLength={50}
				required
			/>
			<label htmlFor="confirmPassword">Confirm Password</label>
		</div>
	);
}

export default ConfirmPasswordInput;
