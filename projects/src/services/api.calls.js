import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

//Project calls

export const getProjects = () => api.get("/");

export const getProject = () => api.get("/project/:projectId");

export const createProject = () => api.post("/");

export const deleteProject = () => api.delete("/project/:projectId");

export const updateProject = () => api.patch("/project/:projectId");

//Tasks calls

export const getTasks = () => api.get("/task");

export const getTask = () => api.get("/task/:taskId");

export const createTask = () => api.post("/task/:taskId");

export const deleteTask = () => api.delete("/task/:taskId");

export const updateTask = () => api.patch("/task/:taskId");
