import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatDate, formatTime } from '../helpers';

export const EpisodeRows = ({ podcastId, episodes }) => {
	return (
		<>
			{episodes.map(episode => (
				<tr
					key={episode.id}
					className='odd:bg-gray-100 even:bg-white border-b'>
					<th
						scope='row'
						className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
						<Link
							to={`/podcast/${podcastId}/episode/${episode.id}`}
							className='text-blue-600 hover:underline'>
							{episode.title}
						</Link>
					</th>
					<td className='px-6 py-4'>{formatDate(episode.date)}</td>
					<td className='px-6 py-4'>
						{episode.time ? formatTime(episode.time) : ''}
					</td>
				</tr>
			))}
		</>
	);
};

EpisodeRows.propTypes = {
	podcastId: PropTypes.string.isRequired,
	episodes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
				.isRequired,
			title: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired,
			time: PropTypes.number.isRequired,
		})
	).isRequired,
};
