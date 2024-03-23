import { podcastApi } from "../../../api";
import { setPodcasts, startLoadingPodcast } from "./podcasterSlice";

export const getPodcast = () => {
	return async (dispatch, getState) => {
		const lastFetched = localStorage.getItem("lastFetched");
		const now = new Date().getTime();

		if (lastFetched && now - lastFetched < 24 * 60 * 60 * 1000) {
			const storedPodcasts = localStorage.getItem("podcasts");
			if (storedPodcasts) {
				dispatch(setPodcasts({ podcasts: JSON.parse(storedPodcasts) }));
			}
			return;
		}

		dispatch(startLoadingPodcast());

		try {
			const { data } = await podcastApi.get();
			const dataApi = data.feed.entry;
			const transformData = (dataApi) => {
				return dataApi.map(item => {
					const largeImage = item['im:image'].sort((a, b) => {
						return parseInt(b.attributes.height) - parseInt(a.attributes.height);
					})[0].label;

					return {
						id: item.id.attributes['im:id'],
						title: item['im:name'].label,
						artist: item['im:artist'].label,
						description: item.summary.label,
						imagen: largeImage
					};
				});
			};
			const podcastList = transformData(dataApi);

			localStorage.setItem("podcasts", JSON.stringify(podcastList));
			localStorage.setItem("lastFetched", now.toString());

			dispatch(setPodcasts({ podcasts: podcastList }));
		} catch (error) {
			console.error("Error fetching podcasts: ", error);
		}
	}
};
