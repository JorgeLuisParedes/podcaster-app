import PropTypes from 'prop-types';
import { Bars } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

export const HeaderBar = ({ isLoading }) => {
	return (
		<nav className='w-full py-2 px-4 border-b-2 flex justify-between mb-7'>
			<Link
				className='font-sans text-2xl font-semibold text-blue-700'
				to='/'>
				<h3 className=''>Podcaster</h3>
			</Link>
			<Bars
				height='30'
				width='30'
				color='#1d4ed8'
				ariaLabel='bars-loading'
				visible={isLoading}
			/>
		</nav>
	);
};

HeaderBar.propTypes = {
	isLoading: PropTypes.bool.isRequired,
};

HeaderBar.defaultProps = {
	isLoading: false,
};
