import { configureStore } from '@reduxjs/toolkit';
import usernameReducer from './state/usernameSlice';
import passwordReducer from './state/passwordSlice';
import confirmPasswordReducer from './state/confirmPasswordSlice';

export const store = configureStore({
	reducer: {
		username: usernameReducer,
		password: passwordReducer,
		confirmPasswordReducer: confirmPasswordReducer,
	},
});

export type IRootState = ReturnType<typeof store.getState>;
