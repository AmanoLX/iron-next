import api from './api';

export const createResource = async (data) => {
  const response = await api.post('/resource/create', data);
  return response.data.resource;
};

export const getSingleResource = async (id) => {
  const response = await api.get(`/resource/${id}`);
  const resource = response.data.resource;
  return { resource };
  // const application = response.data.application;
  // return { pet, application };
};

export const editSingleResource = async (id, data) => {
  const response = await api.patch(`/resource/${id}`, data);
  return response.data.resource;
};

export const deleteSingleResource = async (id) => {
  await api.delete(`/resource/${id}`);
};

export const listResources = async () => {
  const response = await api.get('/resource/list');
  return response.data.resources;
};
