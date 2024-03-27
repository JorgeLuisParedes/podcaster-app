import { PodcastCard } from './PodcastCard';
import PropTypes from 'prop-types';

export const PodcastList = ({ podcasts }) => {
	return (
		<section className='mt-7 px-4 w-full pt-10'>
			<div className='grid grid-cols-4 gap-4'>
				{podcasts.map(({ id, imagen, title, artist, description }) => (
					<PodcastCard
						key={id}
						id={id}
						imagen={imagen}
						title={title}
						artist={artist}
					/>
				))}
			</div>
		</section>
	);
};

PodcastList.propTypes = {
	podcasts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			imagen: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			artist: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
		})
	).isRequired,
};
