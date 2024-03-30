import {
	clearEpisodes,
	filterPodcasts,
	podcasterSlice,
	setEpisodes,
	setPodcastDetails,
	setPodcasts,
	startLoadingPodcast,
} from '../../../../store/slices/podcaster/podcasterSlice';
import {
	episodes,
	initialState,
	podcastDetails,
	podcasts,
} from '../../../fixtures/podcsterFixture';

describe('podcasterSlice reducer', () => {
	test('should return the initial state and be called podcaster', () => {
		const state = podcasterSlice.reducer(initialState, {});

		expect(podcasterSlice.name).toBe('podcaster');
		expect(state).toEqual(initialState);
	});

	test('Should change the state of isLoading to true', () => {
		const state = podcasterSlice.reducer(
			initialState,
			startLoadingPodcast()
		);

		expect(state.isLoading).toBeTruthy();
		expect(state).toEqual({
			isLoading: true,
			podcasts: [],
			filteredPodcasts: [],
			searchText: '',
			podcastDetails: {},
			episodes: [],
		});
	});

	test('should establish a podcast arrangement "podcasts"', () => {
		const state = podcasterSlice.reducer(
			initialState,
			setPodcasts({ podcasts })
		);

		expect(state.podcasts).toEqual(podcasts);
		expect(state.podcasts.length).toBe(podcasts.length);
	});

	test('should handle filterPodcasts and show at least one result', () => {
		const searchText = 'rock';
		const expectedPodcasts = podcasts.filter(
			podcast =>
				podcast.title.toLowerCase().includes(searchText) ||
				podcast.artist.toLowerCase().includes(searchText)
		);

		const state = podcasterSlice.reducer(
			initialState,
			setPodcasts({ podcasts })
		);
		const stateWithSearchText = podcasterSlice.reducer(
			state,
			filterPodcasts(searchText)
		);

		expect(stateWithSearchText.filteredPodcasts).toEqual(expectedPodcasts);
		expect(stateWithSearchText.filteredPodcasts.length).toBeGreaterThan(0);
		expect(stateWithSearchText.searchText).toEqual(searchText);
	});

	test('should handle filterPodcasts with no matches', () => {
		const searchText = 'not result';
		const expectedPodcasts = podcasts.filter(
			podcast =>
				podcast.title.toLowerCase().includes(searchText) ||
				podcast.artist.toLowerCase().includes(searchText)
		);

		const state = podcasterSlice.reducer(
			initialState,
			setPodcasts({ podcasts })
		);
		const stateWithSearchText = podcasterSlice.reducer(
			state,
			filterPodcasts(searchText)
		);

		expect(stateWithSearchText.filteredPodcasts.length).toBe(0);
		expect(stateWithSearchText.searchText).toEqual(searchText);
	});

	test('should set the podcastDetails', () => {
		const state = podcasterSlice.reducer(
			initialState,
			setPodcasts({ podcasts })
		);
		const stateWithId = podcasterSlice.reducer(
			state,
			setPodcastDetails(podcastDetails.id)
		);

		expect(stateWithId.podcastDetails).toEqual(podcastDetails);
	});

	test('should establish a episodes arrangement "episodes"', () => {
		const state = podcasterSlice.reducer(
			initialState,
			setEpisodes(episodes)
		);

		expect(state.episodes).toEqual(episodes);
		expect(state.episodes.length).toBe(episodes.length);
	});

	test('should delete the episodes', () => {
		const state = podcasterSlice.reducer(
			initialState,
			setEpisodes(episodes)
		);
		const stateWithoutEpisode = podcasterSlice.reducer(
			initialState,
			clearEpisodes
		);

		expect(stateWithoutEpisode).toEqual({
			isLoading: false,
			podcasts: [],
			filteredPodcasts: [],
			searchText: '',
			podcastDetails: {},
			episodes: [],
		});
	});
});
