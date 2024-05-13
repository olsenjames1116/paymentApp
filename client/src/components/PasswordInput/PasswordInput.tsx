function PasswordInput() {
	return (
		<div className="form-floating" data-testid="password-input-container">
			<input
				type="password"
				name="password"
				id="password"
				data-testid="password-input"
				placeholder=""
				className="form-control"
			/>
			<label htmlFor="password">Password</label>
		</div>
	);
}

export default PasswordInput;
