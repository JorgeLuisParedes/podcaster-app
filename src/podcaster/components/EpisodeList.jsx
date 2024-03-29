import PropTypes from 'prop-types';
import { EpisodeRows } from './EpisodeRows';

export const EpisodeList = ({ podcastId, episodes }) => {
	return (
		<>
			<section className='w-4/5'>
				<div className='w-11/12 mx-auto mb-7'>
					<h2 className='border border-gray-200 mx-auto p-3 rounded-md shadow text-2xl font-semibold'>
						Episodes: {episodes.length}
					</h2>
				</div>
				<div className='w-11/12 mx-auto py-7 px-3 border border-gray-200 rounded-md shadow mb-7'>
					<div className='relative overflow-x-auto'>
						<table className='w-full text-sm text-left text-gray-500'>
							<thead className='text-xs text-gray-700 uppercase bg-gray-50'>
								<tr>
									<th
										scope='col'
										className='px-6 py-3 w-9/12'>
										Title
									</th>
									<th
										scope='col'
										className='px-6 py-3 w-2/12'>
										Date
									</th>
									<th
										scope='col'
										className='px-6 py-3 w-1/12'>
										Duration
									</th>
								</tr>
							</thead>
							<tbody>
								<EpisodeRows
									podcastId={podcastId}
									episodes={episodes}
								/>
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</>
	);
};

EpisodeList.propTypes = {
	podcastId: PropTypes.string.isRequired,
	episodes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired,
			time: PropTypes.number.isRequired,
		})
	).isRequired,
};
