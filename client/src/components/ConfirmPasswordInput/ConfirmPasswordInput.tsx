function ConfirmPasswordInput() {
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
			/>
			<label htmlFor="confirmPassword">Confirm Password</label>
		</div>
	);
}

export default ConfirmPasswordInput;
