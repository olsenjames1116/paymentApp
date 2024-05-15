import { configureStore } from '@reduxjs/toolkit';
import usernameReducer from './state/usernameSlice';

export const store = configureStore({
	reducer: {
		username: usernameReducer,
	},
});

export type IRootState = ReturnType<typeof store.getState>;
