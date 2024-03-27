import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const PodcastDetails = ({ id, imagen, title, artist, description }) => {
	return (
		<>
			<aside className='w-1/5'>
				<div className='w-9/12 border border-gray-200 mx-auto py-5 px-3 rounded-md shadow'>
					<Link to={`/podcast/${id}`}>
						<img
							className='mx-auto rounded-md'
							src={imagen}
							alt=''
						/>
					</Link>
					<hr className='my-5' />
					<Link to={`/podcast/${id}`}>
						<h2 className='text-md font-semibold'>{title}</h2>
					</Link>
					<Link to={`/podcast/${id}`}>
						<p className='text-md italic'>by: {artist}</p>
					</Link>
					<hr className='my-5' />
					<h3 className='text-sm font-semibold'>Description:</h3>
					<p className='text-sm italic'>{description}</p>
				</div>
			</aside>
		</>
	);
};

PodcastDetails.propTypes = {
	id: PropTypes.string.isRequired,
	imagen: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	artist: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

PodcastDetails.defaultProps = {
	id: '',
	imagen: '',
	title: '',
	artist: '',
	description: '',
};
