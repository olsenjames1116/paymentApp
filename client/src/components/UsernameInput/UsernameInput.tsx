function UsernameInput() {
	return (
		<div className="form-floating" data-testid="username-input-container">
			<input
				type="text"
				name="username"
				id="username"
				data-testid="username-input"
				placeholder=""
				className="form-control"
			/>
			<label htmlFor="username">Username</label>
		</div>
	);
}

export default UsernameInput;
