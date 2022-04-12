import axios from 'axios';
import { getJwt, verifyDecodeJwt } from '../../utils/jwt';

const api = axios.create({
  baseURL: 'http://54.37.154.200:10000/api/v1/',
});

export default api;

/**
 * Setup 2 api interceptors:
 * - 1 to check the jwt and send it at each request
 * - 1 to catch a 401 response and logout the user
 * @param {function(): void} authLogoutUser
 * @returns {(function(): void)} function to cleanup the interceptors
 */
export const setupAuthInterceptors = (authLogoutUser) => {
  const requestInterceptor = api.interceptors.request.use((config) => {
    const jwt = getJwt();
    verifyDecodeJwt(
      jwt,
      () => {
        // suppress eslint rule because axios doc does not specify that config object is immutable
        // eslint-disable-next-line no-param-reassign
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${jwt}`,
        };
      },
      authLogoutUser,
    );

    return config;
  });

  const responseInterceptor = api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        authLogoutUser();
      }
      return Promise.reject(error);
    },
  );

  return function ejectInterceptors() {
    api.interceptors.request.eject(requestInterceptor);
    api.interceptors.response.eject(responseInterceptor);
  };
};
