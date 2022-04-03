import axios from 'axios';

const api = axios.create({
  // TODO update url
  baseURL: 'http://localhost:3000/',
});

export default api;
