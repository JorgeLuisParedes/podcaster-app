import { PodcastCard } from './PodcastCard';
import PropTypes from 'prop-types';

export const PodcastList = ({ podcasts }) => {
	return (
		<>
			<section className='mt-7 px-4 w-full pt-10'>
				<div className='grid grid-cols-4 gap-4'>
					<PodcastCard podcasts={podcasts} />
				</div>
			</section>
		</>
	);
};

PodcastList.propTypes = {
	podcasts: PropTypes.array.isRequired,
};

PodcastList.defaultProps = {
	podcasts: [],
};
