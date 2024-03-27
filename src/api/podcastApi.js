import axios from 'axios';

export const podcastApi = axios.create({
	baseURL: 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
});

export const episodeApi = axios.create({
	baseURL: 'https://api.allorigins.win/get?url=https%3A%2F%2Fitunes.apple.com%2F'
});


