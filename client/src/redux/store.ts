import { configureStore } from '@reduxjs/toolkit';
import usernameReducer from './state/usernameSlice';
import passwordReducer from './state/passwordSlice';
import confirmPasswordReducer from './state/confirmPasswordSlice';
import invalidUsernameFeedbackReducer from './state/invalidUsernameFeedbackSlice';

export const store = configureStore({
	reducer: {
		username: usernameReducer,
		password: passwordReducer,
		confirmPasswordReducer: confirmPasswordReducer,
		invalidUsernameFeedback: invalidUsernameFeedbackReducer,
	},
});

export type IRootState = ReturnType<typeof store.getState>;
