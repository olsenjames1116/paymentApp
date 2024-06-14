import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';
import { User } from '../../../types';
import moneyImage from '../../images/money.jpg';

function FriendsSearchList() {
	const friendsSearchResult = useSelector(
		(state: IRootState) => state.friendsSearchResult.value
	);

	const addFriend = (
		event: React.FormEvent<HTMLFormElement>,
		username: string
	) => {
		event.preventDefault();

		try {
			console.log(username);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<ul>
			{friendsSearchResult.map((result: User) => {
				return (
					<li>
						{result.pic ? (
							<img src={result.pic} alt="" />
						) : (
							<img src={moneyImage} />
						)}
						<span>{result.username}</span>
						<form onSubmit={(event) => addFriend(event, result.username)}>
							<button className="btn btn-primary">+ Add</button>
						</form>
					</li>
				);
			})}
		</ul>
	);
}

export default FriendsSearchList;
