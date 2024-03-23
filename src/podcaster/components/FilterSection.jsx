import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterPodcasts } from '../../store/slices/podcaster';

export const FilterSection = ({ totalPodcast }) => {
	const dispatch = useDispatch();

	const handleSubmit = event => {
		event.preventDefault();
	};

	const handleInputChange = event => {
		dispatch(filterPodcasts(event.target.value));
	};

	return (
		<div className='flex justify-end pe-4'>
			<span className='bg-blue-700 text-white text-base font-semibold me-2 px-4 py-1 rounded-full'>
				{totalPodcast}
			</span>
			<div className='relative w-72'>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						id='filterInput'
						placeholder='Filter podcasts...'
						className='bg-white border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-700 p-1.5 px-3'
						onChange={handleInputChange}
					/>
				</form>
			</div>
		</div>
	);
};

FilterSection.propTypes = {
	totalPodcast: PropTypes.number.isRequired,
};

FilterSection.defaultProps = {
	totalPodcast: 100,
};
