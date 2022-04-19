import api from './axiosInstance';

/**
 * @param {Object} payload
 * @param {string} payload.user_id
 * @param {string} payload.name
 * @returns {Promise<Object>}
 *
 */
export const addHome = async (payload) => {
  try {
    const response = await api.post('homes', payload);
    return response.data;
  } catch (error) {
    let errorMessage;
    if (error.response && error.response.status === 400) {
      errorMessage = error.response.data.message;
    } else {
      errorMessage = 'Une erreur est survenue, veuillez réessayer plus tard';
    }
    throw new Error(errorMessage);
  }
};

/**
 * @param {Object} payload
 * @param {string} payload.name
 * @param {number} userId
 * @param {number} homeId
 * @returns {Promise<Object>}
 *
 */
export const updateHome = async (payload, homeId, userId) => {
  try {
    const response = await api.patch(`homes/${homeId}`, { ...payload, user_id: userId });
    return response.data;
  } catch (error) {
    let errorMessage;
    if (error.response && error.response.status === 400) {
      errorMessage = error.response.data.message;
    } else {
      errorMessage = 'Une erreur est survenue, veuillez réessayer plus tard';
    }
    throw new Error(errorMessage);
  }
};
