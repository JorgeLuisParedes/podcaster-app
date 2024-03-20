import { EpisodeList, HeaderBar, PodcastDetails } from '../components';

export const PodcastPage = () => {
	return (
		<>
			<HeaderBar />
			<div className='flex'>
				<PodcastDetails />
				<EpisodeList />
			</div>
		</>
	);
};
