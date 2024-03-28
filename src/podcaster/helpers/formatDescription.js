export const formatDescription = description => {
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