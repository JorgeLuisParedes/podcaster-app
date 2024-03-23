import { createSlice } from '@reduxjs/toolkit';

export const podcasterSlice = createSlice({
	name: 'podcaster',
	initialState: {
		isLoading: false,
		podcasts: [],
		filteredPodcasts: [],
		searchText: ''
	},
	reducers: {
		startLoadingPodcast: (state, /* action */) => {
			state.isLoading = true;
		},
		setPodcasts: (state, action) => {
			state.isLoading = false;
			state.podcasts = action.payload.podcasts;
			state.filteredPodcasts = action.payload.podcasts;
		},
		filterPodcasts: (state, action) => {
			state.searchText = action.payload;
			state.filteredPodcasts = state.podcasts.filter(podcast =>
				podcast.title.toLowerCase().includes(state.searchText.toLowerCase()) ||
				podcast.artist.toLowerCase().includes(state.searchText.toLowerCase())
			);
		}
	}
});

export const { startLoadingPodcast, setPodcasts, filterPodcasts } = podcasterSlice.actions;