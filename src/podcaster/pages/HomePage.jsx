import { useDispatch, useSelector } from 'react-redux';
import { FilterSection, HeaderBar, PodcastList } from '../components';
import { useEffect } from 'react';
import { getPodcast } from '../../store';

export const HomePage = () => {
	const dispatch = useDispatch();
	const { isLoading, podcasts } = useSelector(state => state.podcaster);

	useEffect(() => {
		dispatch(getPodcast());
	}, []);

	return (
		<>
			<HeaderBar isLoading={isLoading} />
			<FilterSection totalPodcast={podcasts.length} />
			<PodcastList podcasts={podcasts} />
		</>
	);
};
