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

// api.interceptors.response.use(response => response, async error => {
//   const originalRequest = error.config;
//   if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       // Renovar el token JWT aquí
//   }
//   return Promise.reject(error);
// });

export default api;