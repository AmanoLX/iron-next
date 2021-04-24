import axios from 'axios';

const api = axios.create({
	baseURL: 'https://iron-next.herokuapp.com/',
	withCredentials: true,
});

export default api;
