export const initialState = {
	isLoading: false,
	podcasts: [],
	filteredPodcasts: [],
	searchText: '',
	podcastDetails: {},
	episodes: [],
};

export const podcastDetails = {
	id: '0000001',
	title: 'Title Podcast',
	artist: 'Artist Podcast',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus tempor tortor id mollis. Ut convallis neque vel tristique pretium. Vestibulum sed nisl ipsum.',
	imagen: 'http://demo1.jpg',
};

export const podcasts = [
	{
		id: '0000001',
		title: 'Title Podcast',
		artist: 'Artist Podcast',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus tempor tortor id mollis. Ut convallis neque vel tristique pretium. Vestibulum sed nisl ipsum.',
		imagen: 'http://demo1.jpg',
	},
	{
		id: '0000002',
		title: 'Title Podcast 2',
		artist: 'Artist Podcast 2',
		description:
			'Quisque molestie eleifend convallis. Quisque ex est, molestie ac efficitur id, sollicitudin a nibh. Sed in volutpat mauris. Vestibulum eu diam iaculis ligula euismod tempus in nec mauris.',
		imagen: 'http://demo2.jpg',
	},
	{
		id: '1535809341',
		title: 'A History of Rock Music in 500 Songs',
		artist: 'Andrew Hickey',
		description:
			'Andrew Hickey presents a history of rock music from 1938 to 1999, looking at five hundred songs that shaped the genre.',
		imagen: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/170x170bb.png',
	},
];

export const episodes = [
	{
		id: '1000001',
		title: 'Episode Title 1',
		date: new Date(),
		time: 6000,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet aliquam eros. Praesent interdum ante eu sapien consectetur, in facilisis nisi sodales. Duis blandit, tortor pulvinar congue volutpat, ex justo pulvinar massa, quis rhoncus purus elit a purus. Morbi justo ipsum, dapibus vitae lacus et, maximus malesuada orci. Donec bibendum enim condimentum placerat porttitor.',
		url: 'http://audio1.mp3',
	},
	{
		id: '2000002',
		title: 'Episode Title 2',
		date: new Date(),
		time: 12568745,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet aliquam eros. Praesent interdum ante eu sapien consectetur, in facilisis nisi sodales. Duis blandit, tortor pulvinar congue volutpat, ex justo pulvinar massa, quis rhoncus purus elit a purus. Morbi justo ipsum, dapibus vitae lacus et, maximus malesuada orci. Donec bibendum enim condimentum placerat porttitor.',
		url: 'http://audio2.mp3',
	},
	{
		id: '3000003',
		title: 'Episode Title 3',
		date: new Date(),
		time: 2459842,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet aliquam eros. Praesent interdum ante eu sapien consectetur, in facilisis nisi sodales. Duis blandit, tortor pulvinar congue volutpat, ex justo pulvinar massa, quis rhoncus purus elit a purus. Morbi justo ipsum, dapibus vitae lacus et, maximus malesuada orci. Donec bibendum enim condimentum placerat porttitor.',
		url: 'http://audio3.mp3',
	},
];
