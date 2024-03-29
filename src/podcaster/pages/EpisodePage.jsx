import { useDispatch, useSelector } from 'react-redux';
import { EpisodeDetails, HeaderBar, PodcastDetails } from '../components';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getEpisode } from '../../store';

export const EpisodePage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { podcastId, episodeId } = useParams();
	const { podcastDetails, episodes } = useSelector(state => state.podcaster);

	useEffect(() => {
		dispatch(getEpisode(podcastId)).catch(error => {
			console.error(error.message);
			navigate('/not-found-page', { replace: true });
		});
	}, []);

	const episode = episodes.find(ep => ep.id.toString() === episodeId);
	useEffect(() => {
		if (!episode) {
			console.error('Episode not found');
			navigate('/not-found-page', { replace: true });
		}
	}, [episode, navigate]);
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
