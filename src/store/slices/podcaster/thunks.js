import { episodeApi, podcastApi } from '../../../api';
import {
	clearEpisodes,
	setPodcastDetails,
	setEpisodes,
	setPodcasts,
	startLoadingPodcast,
} from './podcasterSlice';

export const getPodcast = () => {
	return async (dispatch, getState) => {
		const lastFetched = localStorage.getItem('lastFetched');
		const now = new Date().getTime();

		if (lastFetched && now - lastFetched < 24 * 60 * 60 * 1000) {
			const storedPodcasts = localStorage.getItem('podcasts');
			if (storedPodcasts) {
				dispatch(setPodcasts({ podcasts: JSON.parse(storedPodcasts) }));
			}
			return;
		}

		dispatch(startLoadingPodcast());

		try {
			const { data } = await podcastApi.get();
			const dataApi = data.feed.entry;
			const transformData = dataApi => {
				return dataApi.map(item => {
					const largeImage = item['im:image'].sort((a, b) => {
						return (
							parseInt(b.attributes.height) -
							parseInt(a.attributes.height)
						);
					})[0].label;

					return {
						id: item.id.attributes['im:id'],
						title: item['im:name'].label,
						artist: item['im:artist'].label,
						description: item.summary.label,
						imagen: largeImage,
					};
				});
			};
			const podcastList = transformData(dataApi);

			localStorage.setItem('podcasts', JSON.stringify(podcastList));
			localStorage.setItem('lastFetched', now.toString());

			dispatch(setPodcasts({ podcasts: podcastList }));
		} catch (error) {
			console.error('Error fetching podcasts: ', error);
		}
	};
};

export const getEpisode = podcastId => {
	return async (dispatch, getState) => {
		dispatch(startLoadingPodcast());

		const { podcaster } = getState('podcaster');
		const podcastExists =
			podcaster.podcasts.some(podcast => podcast.id === podcastId) ||
			JSON.parse(localStorage.getItem('podcasts') || '[]').some(
				podcast => podcast.id === podcastId
			);

		if (!podcastExists) {
			throw new Error('Podcast not found');
		}

		if (podcaster.podcasts.length === 0) {
			const savedPodcasts = JSON.parse(localStorage.getItem('podcasts'));
			dispatch(setPodcasts({ podcasts: savedPodcasts }));
		}

		dispatch(setPodcastDetails(podcastId));
		dispatch(clearEpisodes());

		const storedDataJSON = localStorage.getItem(`podcast_${podcastId}`);
		const storedData = storedDataJSON ? JSON.parse(storedDataJSON) : null;
		const currentTime = new Date().getTime();

		if (
			storedData &&
			currentTime - storedData.timestamp < 24 * 60 * 60 * 1000
		) {
			dispatch(setEpisodes(storedData.episodes));
		} else {
			try {
				const { data } = await episodeApi.get(
					`lookup%3Fid%3D${podcastId}%26media%3Dpodcast%26entity%3DpodcastEpisode%26limit%3D20`
				);
				const { results } = JSON.parse(data.contents);
				const [, ...episodes] = results;

				const episodeList = episodes.map(item => ({
					id: item.trackId,
					title: item.trackName,
					date: item.releaseDate,
					time: item.trackTimeMillis,
					description: item.description,
					url: item.episodeUrl,
				}));

				localStorage.setItem(
					`podcast_${podcastId}`,
					JSON.stringify({
						timestamp: currentTime,
						episodes: episodeList,
					})
				);

				dispatch(setEpisodes(episodeList));
			} catch (error) {
				console.error('Error fetching episodes: ', error);
			}
		}
	};
};
