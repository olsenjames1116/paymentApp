import AccountFormContainer from '../AccountFormContainer/AccountFormContainer';
import LogInForm from '../LogInForm/LogInForm';

function LogInContent() {
	return (
		<main data-testid="log-in-content">
			<AccountFormContainer>
				<LogInForm />
			</AccountFormContainer>
		</main>
	);
}

export default LogInContent;
