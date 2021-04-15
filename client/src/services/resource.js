import api from './api';

export const createResource = async (data) => {
  const response = await api.post('/resource/create', data);
  return response.data.resource;
};

export const getSingleResource = async (id) => {
  const response = await api.get(`/resource/${id}`);
  const resource = response.data.resource;
  return resource;
  // const application = response.data.application;
  // return { pet, application };
};
