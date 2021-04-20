import api from './api';

export const createProject = async (data) => {
  const response = await api.post('/project/create', data);
  return response.data.project;
};

export const listProjects = async () => {
  const response = await api.get('/project/list');
  return response.data.projects;
};

export const loadProject = async (id) => {
  const response = await api.get(`/project/${id}`);
  const project = response.data.project;
  const participation = response.data.participation;
  return { project, participation };
};

export const editProject = async (id, data) => {
  const response = await api.patch(`/project/${id}`, data);
  return response.data.project;
};

export const deleteProject = async (id) => {
  await api.delete(`/project/${id}`);
};

export const participateInProject = async (id) => {
  const response = await api.post(`/project/${id}/participation`);
  return response.data.participation;
};
