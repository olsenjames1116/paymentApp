import { createSlice } from '@reduxjs/toolkit';

const initialState: { value: string[] } = {
	value: [],
};

// Represents the password entered on the log in and sign up pages.
export const invalidUsernameFeedbackSlice = createSlice({
	name: 'invalidUsernameFeedback',
	initialState,
	reducers: {
		storeInvalidUsernameFeedback: ({ value }, action) => {
			return { value: [...value, action.payload] };
		},
		removeInvalidUsernameFeedback: () => {
			return { value: [] };
		},
	},
});

export const { storeInvalidUsernameFeedback, removeInvalidUsernameFeedback } =
	invalidUsernameFeedbackSlice.actions;
export default invalidUsernameFeedbackSlice.reducer;
