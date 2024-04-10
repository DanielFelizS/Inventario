import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5198/api",
    withCredentials: false
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;

});

export default api;