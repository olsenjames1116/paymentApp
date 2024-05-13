interface UsernameInputProps {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function UsernameInput({ handleChange }: UsernameInputProps) {
	return (
		<div className="form-floating" data-testid="username-input-container">
			<input
				type="text"
				name="username"
				id="username"
				data-testid="username-input"
				placeholder=""
				className="form-control"
				onChange={(event) => handleChange(event)}
				maxLength={50}
				required
			/>
			<label htmlFor="username">Username</label>
		</div>
	);
}

export default UsernameInput;
