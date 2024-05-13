import AccountFormContainer from '../AccountFormContainer/AccountFormContainer';
import SignUpForm from '../SignUpForm/SignUpForm';

function SignUpPageContent() {
	return (
		<main data-testid="sign-up-content">
			<AccountFormContainer>
				<SignUpForm />
			</AccountFormContainer>
		</main>
	);
}

export default SignUpPageContent;
