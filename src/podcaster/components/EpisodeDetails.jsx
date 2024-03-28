import PropTypes from 'prop-types';

const processDescription = description => {
	const urlRegex =
		/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|]|(\b[\w.-]*\.(com|net|fm)\b[\w/-]*))/gi;

	const htmlDescription = description.replace(urlRegex, url => {
		const href = url.startsWith('http') ? url : `http://${url}`;
		return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="text-blue-700">${url}</a>`;
	});

	return htmlDescription
		.split(/\\n\\n|\\n|\n/)
		.map(paragraph => `<p class="mb-2">${paragraph}</p>`)
		.join('');
};

export const EpisodeDetails = ({ title, description, url }) => {
	return (
		<section className='w-4/5 mx-auto'>
			<div className='w-11/12 mx-auto p-3 border border-gray-200 rounded-md shadow'>
				<h2 className='text-2xl font-semibold mb-4'>{title}</h2>
				<div
					dangerouslySetInnerHTML={{
						__html: processDescription(description),
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
