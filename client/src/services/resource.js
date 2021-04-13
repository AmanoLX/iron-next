import api from './api';

export const createResource = async (data) => {
  const response = await api.post('/resource/create', data);
  return response.data.resource;
};
