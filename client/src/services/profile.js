import api from './api';

export const loadProfile = async id => {
	const response = await api.get(`/profile/${id}`);
	return response.data.user;
};

export const editSingleProfile = async (id, data) => {
	const response = await api.patch(`/profile/${id}/edit`, data);
	return response.data.user;
};
