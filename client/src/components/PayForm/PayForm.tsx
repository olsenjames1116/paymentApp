function PayForm() {
	return (
		<form onSubmit={(event) => event.preventDefault()} data-testid="pay-form">
			<button className="btn btn-primary">Pay</button>
		</form>
	);
}

export default PayForm;
