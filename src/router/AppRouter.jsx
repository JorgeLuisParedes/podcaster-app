import { Route, Routes } from 'react-router-dom';
import { EpisodePage, HomePage, NotFoundPage, PodcastPage } from '../podcaster';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/podcast/:podcastId' element={<PodcastPage />} />
				<Route
					path='/podcast/:podcastId/episode/:episodeId'
					element={<EpisodePage />}
				/>

				<Route path='/*' element={<NotFoundPage />} />
			</Routes>
		</>
	);
};
