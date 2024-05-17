import { configureStore } from '@reduxjs/toolkit';
import usernameReducer from './state/usernameSlice';
import passwordReducer from './state/passwordSlice';
import confirmPasswordReducer from './state/confirmPasswordSlice';
import invalidUsernameFeedbackReducer from './state/invalidUsernameFeedbackSlice';
import invalidPasswordFeedbackReducer from './state/invalidPasswordFeedbackSlice';

export const store = configureStore({
	reducer: {
		username: usernameReducer,
		password: passwordReducer,
		confirmPasswordReducer: confirmPasswordReducer,
		invalidUsernameFeedback: invalidUsernameFeedbackReducer,
		invalidPasswordFeedback: invalidPasswordFeedbackReducer,
	},
});

export type IRootState = ReturnType<typeof store.getState>;
