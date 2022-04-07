import axios from 'axios';

const api = axios.create({
  baseURL: 'http://54.37.154.200:10000/api/v1/',
});

api.interceptors.request.use((config) => {
  const jwt = localStorage.getItem('JWT');
  if (jwt) {
    // suppress eslint rule because axios doc does not specify that config object is immutable
    // eslint-disable-next-line no-param-reassign
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${jwt}`,
    };
  }
  return config;
});

export default api;
