import { decodeJwt } from 'jose';

/**
 * set jwt token to storage
 * @param {string} token
 */
export const setJwt = (token) => {
  localStorage.setItem('JWT', token);
};

/**
 * remove jwt token from storage
 */
export const removeJwt = () => {
  localStorage.removeItem('JWT');
};

/**
 * get jwt token from storage
 * @returns {string} JWT Token
 */
export const getJwt = () => localStorage.getItem('JWT');

/**
 * @param {string} jwt
 * @param {function(object)} onSuccess(claims)
 * @param {function(void)} onError
 */
export const verifyDecodeJwt = (jwt, onSuccess, onError) => {
  try {
  // if decodeJwt fails, it throws an error.
    const claims = decodeJwt(jwt);
    if (claims.exp * 1000 <= Date.now()) {
      onError();
    } else {
      onSuccess(claims);
    }
  } catch {
    onError();
  }
};
