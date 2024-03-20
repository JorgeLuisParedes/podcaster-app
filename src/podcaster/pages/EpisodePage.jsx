import { EpisodeDetails, HeaderBar, PodcastDetails } from '../components';

export const EpisodePage = () => {
	return (
		<>
			<HeaderBar />
			<div className='flex'>
				<PodcastDetails />
				<EpisodeDetails />
			</div>
		</>
	);
};
