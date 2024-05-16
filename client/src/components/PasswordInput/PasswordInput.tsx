interface PasswordInputProps {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	passwordRef: React.RefObject<HTMLInputElement>;
}

function PasswordInput({ handleChange, passwordRef }: PasswordInputProps) {
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
				ref={passwordRef}
				maxLength={50}
				required
			/>
			<label htmlFor="password">Password</label>
		</div>
	);
}

export default PasswordInput;
