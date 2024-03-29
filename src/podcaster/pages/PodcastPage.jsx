import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { EpisodeList, HeaderBar, PodcastDetails } from '../components';
import { getEpisode } from '../../store';

export const PodcastPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { podcastId } = useParams();
	const { isLoading, podcastDetails, episodes } = useSelector(
		state => state.podcaster
	);

	useEffect(() => {
		dispatch(getEpisode(podcastId)).catch(error => {
			console.error(error.message);
			navigate('/not-found-page', { replace: true });
		});
	}, []);

	return (
		<>
			<HeaderBar isLoading={isLoading} />
			<div className='flex'>
				<PodcastDetails
					id={podcastDetails.id}
					imagen={podcastDetails.imagen}
					title={podcastDetails.title}
					artist={podcastDetails.artist}
					description={podcastDetails.description}
				/>
				<EpisodeList podcastId={podcastId} episodes={episodes} />
			</div>
		</>
	);
};
