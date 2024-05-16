import { configureStore } from '@reduxjs/toolkit';
import usernameReducer from './state/usernameSlice';
import passwordReducer from './state/passwordSlice';

export const store = configureStore({
	reducer: {
		username: usernameReducer,
		password: passwordReducer,
	},
});

export type IRootState = ReturnType<typeof store.getState>;
