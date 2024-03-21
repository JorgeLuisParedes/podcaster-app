import { createSlice } from '@reduxjs/toolkit';

export const podcasterSlice = createSlice({
	name: 'podcaster',
	initialState: {
		podcasts: [],
		isLoading: false
	},
	reducers: {
		startLoadingPodcast: (state, /* action */) => {
			state.isLoading = true;
		},
		setPodcasts: (state, action) => {
			state.isLoading = false;
			state.podcasts = action.payload.podcasts;
		}
	}
});

// Action creators are generated for each case reducer function
export const { startLoadingPodcast, setPodcasts } = podcasterSlice.actions;