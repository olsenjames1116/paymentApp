import { createSlice } from '@reduxjs/toolkit';

/* Represents the image file from the file input for the user to edit their 
profile photo. */
export const imageFileSlice = createSlice({
	name: 'imageFile',
	initialState: {
		value: {},
	},
	reducers: {
		storeImageFile: (state, action) => {
			return { value: action.payload };
		},
		removeImageFile: () => {
			return { value: {} };
		},
	},
});

export const { storeImageFile, removeImageFile } = imageFileSlice.actions;
export default imageFileSlice.reducer;
