import { PodcastCard } from './PodcastCard';
import PropTypes from 'prop-types';

export const PodcastList = ({ podcasts }) => {
	return (
		<section className='mt-7 px-4 w-full pt-10'>
			<div className='grid grid-cols-4 gap-4'>
				{podcasts.map(podcast => (
					<PodcastCard
						key={podcast.id}
						id={podcast.id}
						imagen={podcast.imagen}
						title={podcast.title}
						artist={podcast.artist}
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
		})
	).isRequired,
};
