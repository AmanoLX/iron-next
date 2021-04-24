import axios from 'axios';

const api = axios.create({
	baseURL: 'https://iron-next.herokuapp.com/',
	// baseURL: 'http://localhost:3000',
	withCredentials: true,
});

export default api;
