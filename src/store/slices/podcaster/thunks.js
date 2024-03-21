import { podcastApi } from "../../../api";
import { setPodcasts, startLoadingPodcast } from "./podcasterSlice"

export const getPodcast = () => {
	return async (dispatch, getState) => {
		dispatch(startLoadingPodcast());
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

		dispatch(setPodcasts({ podcasts: podcastList }));
	}
}