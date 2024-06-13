import api from '../../axiosConfig';

function FriendsSearchBar() {
	const searchUsers = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;

		try {
			const response = await api.get(`/users/${value}`);

			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form data-testid="friends-search-bar">
			<div className="input-group mb">
				<span className="input-group-text">🔍</span>
				<input
					type="text"
					className="form-control"
					onChange={(event) => searchUsers(event)}
				/>
			</div>
		</form>
	);
}

export default FriendsSearchBar;
