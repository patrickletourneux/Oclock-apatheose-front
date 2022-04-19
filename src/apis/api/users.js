import api from './axiosInstance';

/**
 * @param {Object} payload
 * @param {string} payload.email
 * @param {string} payload.password
 * @param {string} payload.pseudonym
 * @param {function(null)} onSuccess
 * @param {function(string)} onError
 * @returns {Promise<void>}
 *
 */
export const addUser = async (payload, onSuccess, onError) => {
  try {
    await api.post('users', payload);
    onSuccess(null);
  } catch (error) {
    const status = error.response?.status;
    if (status === 400 || status === 404 || status === 409) {
      onError(error.response.data.message);
    } else {
      onError('Une erreur est survenue, veuillez réessayer plus tard');
    }
  }
};

/**
 * @param {number} userId
 * @param {function({
 *   id: number,
 *   pseudonym: string,
 *   avatar_img: string,
 *   email: string,
 *   password: string,
 *   home_id: number,
 *   created_at: string,
 * })} onSuccess
 * @param {function(string)} onError
 * @returns {Promise<void>}
 *
 */
export const getUser = async (userId, onSuccess, onError) => {
  try {
    const response = await api.get(`users/${userId}`);
    onSuccess(response.data);
  } catch (error) {
    if (error.response && (error.response.status === 400 || error.response.status === 404)) {
      onError(error.response.data.message);
    } else {
      onError('Une erreur est survenue, veuillez réessayer plus tard');
    }
  }
};

/**
 * @param {number} userId
 * @returns {Promise<Object>}
 */
export const getUserWithPromise = async (userId) => {
  try {
    const response = await api.get(`users/${userId}`);
    return response.data;
  } catch (error) {
    const errorMessage = 'Une erreur est survenue, veuillez réessayer plus tard';
    throw new Error(errorMessage);
  }
};

/**
 * @param {Object} payload
 * @param {number} payload.id
 * @param {string} payload.pseudonym
 * @param {string} payload.email
 *  * @param {string} payload.password
 * @param {function(null)} onSuccess
 * @param {function(string)} onError
 * @returns {Promise<void>}
 *
 */
export const updateUser = async (userId, payload, onSuccess, onError) => {
  try {
    await api.patch(`users/${userId}`, payload);
    onSuccess(null);
  } catch (error) {
    const status = error.response?.status;
    if (status === 400 || status === 404 || status === 409) {
      onError(error.response.data.message);
    } else {
      onError('Une erreur est survenue, veuillez réessayer plus tard');
    }
  }
};

/**
 * @param {number} userId
 * @param {Object} payload
 * @returns {Promise<Object>}
 */
export const updateUserWithPromise = async (userId, payload) => {
  try {
    const response = await api.patch(`users/${userId}`, payload);
    return response.data;
  } catch (error) {
    const errorMessage = 'Une erreur est survenue, veuillez réessayer plus tard';
    throw new Error(errorMessage);
  }
};
