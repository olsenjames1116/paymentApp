import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';
import api from '../../axiosConfig';
import { Suspense, useEffect } from 'react';
import { storeUser } from '../../redux/state/userSlice';
import { User } from '../../../types.ts';
import Nav from '../Nav/Nav.tsx';

function Sidebar() {
	const user: User | object = useSelector(
		(state: IRootState) => state.user.value
	);

	const dispatch = useDispatch();

	useEffect(() => {
		const getUserInfo = async () => {
			try {
				const response = await api.get('/users', {
					headers: {
						Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
					},
				});

				dispatch(storeUser(response.data));
			} catch (error) {
				console.log(error);
			}
		};

		getUserInfo();
	}, []);

	return (
		<section data-testid="sidebar">
			<h1>SpotMe</h1>
			<img src="" alt="" />
			<Suspense fallback={<span>Loading</span>}>
				<span>{Object.keys(user).length > 0 && (user as User).username}</span>
			</Suspense>
			<Suspense fallback={<span>Loading</span>}>
				<span>{Object.keys(user).length > 0 && (user as User).balance}</span>
			</Suspense>
			<form>
				<button>Pay</button>
			</form>
			<Nav />
		</section>
	);
}

export default Sidebar;
