interface AccountFormContainerProps {
	children: React.ReactNode;
}

function AccountFormContainer({ children }: AccountFormContainerProps) {
	return (
		<div data-testid="account-form-container" className="row">
			<h1>SpotMe</h1>
			{children}
		</div>
	);
}

export default AccountFormContainer;
