import PropTypes from 'prop-types';
import { formatDescription } from '../helpers';

export const EpisodeDetails = ({ title, description, url }) => {
	return (
		<section className='w-4/5 mx-auto'>
			<div className='w-11/12 mx-auto p-3 border border-gray-200 rounded-md shadow'>
				<h2 className='text-2xl font-semibold mb-4'>{title}</h2>
				<div
					dangerouslySetInnerHTML={{
						__html: formatDescription(description),
					}}
				/>
				<audio controls className='w-full mt-4'>
					<source src={url} type='audio/mpeg' />
					Your browser does not support the audio element.
				</audio>
			</div>
		</section>
	);
};

EpisodeDetails.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};
