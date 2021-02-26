import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

//Project calls

export const getProjects = () => api.get("/");

export const getProject = (projectId) => api.get(`/project/${projectId}`);

export const createProject = (formData) => api.post("/new-project", formData);

export const deleteProject = (projectId) => api.delete(`/project/${projectId}`);

export const updateProject = (projectId, data) =>
  api.patch(`/project/${projectId}`, data);

//Tasks calls

export const getTasks = () => api.get("/task");

export const getTask = () => api.get("/task/:taskId");

export const createTask = () => api.post("/task/:taskId");

export const deleteTask = () => api.delete("/task/:taskId");

export const updateTask = () => api.patch("/task/:taskId");
