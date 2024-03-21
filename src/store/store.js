import { configureStore } from '@reduxjs/toolkit';
import { podcasterSlice } from './slices';

export const store = configureStore({
	reducer: {
		podcaster: podcasterSlice.reducer
	},
});