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
