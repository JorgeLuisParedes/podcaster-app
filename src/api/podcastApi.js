import axios from 'axios';

export const podcastApi = axios.create({
	baseURL: 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
})