import { useDispatch, useSelector } from 'react-redux';
import { EpisodeDetails, HeaderBar, PodcastDetails } from '../components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getEspisode } from '../../store';

export const EpisodePage = () => {
	const dispatch = useDispatch();
	const { podcastId, episodeId } = useParams();
	const { podcastDetails, episodes } = useSelector(state => state.podcaster);

	useEffect(() => {
		dispatch(getEspisode(podcastId));
	}, []);

	const episode = episodes.find(ep => ep.id.toString() === episodeId);
	return (
		<>
			<HeaderBar />
			<div className='flex'>
				<PodcastDetails
					id={podcastDetails.id}
					imagen={podcastDetails.imagen}
					title={podcastDetails.title}
					artist={podcastDetails.artist}
					description={podcastDetails.description}
				/>
				{episode && <EpisodeDetails {...episode} />}
			</div>
		</>
	);
};
