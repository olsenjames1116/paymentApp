import { Suspense, useEffect } from 'react';
import { IRootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../../../types';
import api from '../../axiosConfig';
import { storeUser } from '../../redux/state/userSlice';

function UserData() {
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
		<div>
			<img src="" alt="" />
			<Suspense fallback={<span>Loading</span>}>
				<span>{Object.keys(user).length > 0 && (user as User).username}</span>
			</Suspense>
			<Suspense fallback={<span>Loading</span>}>
				<span>{Object.keys(user).length > 0 && (user as User).balance}</span>
			</Suspense>
		</div>
	);
}

export default UserData;
