interface DemoAccountLogInProps {
	handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function DemoAccountLogIn({ handleClick }: DemoAccountLogInProps) {
	return (
		<button
			className="btn btn-outline-primary"
			onClick={(event) => handleClick(event)}
			data-testid="demo-account-log-in"
		>
			Demo Account
		</button>
	);
}

export default DemoAccountLogIn;
