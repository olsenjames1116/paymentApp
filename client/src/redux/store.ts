import { configureStore } from '@reduxjs/toolkit';
import usernameReducer from './state/usernameSlice';
import passwordReducer from './state/passwordSlice';
import confirmPasswordReducer from './state/confirmPasswordSlice';
import invalidUsernameFeedbackReducer from './state/invalidUsernameFeedbackSlice';
import invalidPasswordFeedbackReducer from './state/invalidPasswordFeedbackSlice';
import invalidConfirmPasswordFeedbackReducer from './state/invalidConfirmPasswordFeedbackSlice';
import locationReducer from './state/locationSlice';
import userReducer from './state/userSlice';

export const store = configureStore({
	reducer: {
		username: usernameReducer,
		password: passwordReducer,
		confirmPassword: confirmPasswordReducer,
		invalidUsernameFeedback: invalidUsernameFeedbackReducer,
		invalidPasswordFeedback: invalidPasswordFeedbackReducer,
		invalidConfirmPasswordFeedback: invalidConfirmPasswordFeedbackReducer,
		location: locationReducer,
		user: userReducer,
	},
});

export type IRootState = ReturnType<typeof store.getState>;
