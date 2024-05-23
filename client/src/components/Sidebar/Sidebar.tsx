import Nav from '../Nav/Nav.tsx';
import PayForm from '../PayForm/PayForm.tsx';
import UserData from '../UserData/UserData.tsx';

function Sidebar() {
	return (
		<section data-testid="sidebar">
			<h1>SpotMe</h1>
			<UserData />
			<PayForm />
			<Nav />
		</section>
	);
}

export default Sidebar;
