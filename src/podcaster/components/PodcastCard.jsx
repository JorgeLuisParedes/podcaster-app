import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PodcastCard = ({ podcasts }) => {
	return (
		<>
			{podcasts.map(podcast => (
				<Link
					to={`/podcast/${podcast.id}`}
					key={podcast.id}
					className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-10 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-50 duration-10'>
					<div className='flex flex-col items-center pb-6'>
						<img
							className='w-24 h-24 mb-3 -mt-10 rounded-full shadow-lg'
							src={podcast.imagen}
							alt={`${podcast.title} image`}
						/>
						<h5 className='mb-1 text-md font-semibold text-gray-900 uppercase text-center'>
							{podcast.title}
						</h5>
						<span className='text-sm text-gray-500 text-center'>
							{podcast.artist}
						</span>
					</div>
				</Link>
			))}
		</>
	);
};

PodcastCard.propTypes = {
	podcasts: PropTypes.array.isRequired,
};

PodcastCard.defaultProps = {
	podcasts: [],
};
