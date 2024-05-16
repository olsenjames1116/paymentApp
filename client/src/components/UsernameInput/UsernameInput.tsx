interface UsernameInputProps {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	invalidFeedback: string[];
	usernameRef: React.RefObject<HTMLInputElement>;
}

function UsernameInput({
	handleChange,
	invalidFeedback,
	usernameRef,
}: UsernameInputProps) {
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
				ref={usernameRef}
				maxLength={50}
				required
			/>
			<label htmlFor="username">Username</label>
			<ul className="invalid-feedback">
				{invalidFeedback.map((feedback, index) => {
					return <li key={index}>{feedback}</li>;
				})}
			</ul>
		</div>
	);
}

export default UsernameInput;
