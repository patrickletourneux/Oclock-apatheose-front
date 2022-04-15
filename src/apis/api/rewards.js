import api from './axiosInstance';

/**
 * @param {Object} payload
 * @param {string} payload.title
 * @param {string} payload.description
 * @param {number} homeId
 * @returns {Promise<Object>}
 *
 */
const addReward = async (payload, homeId) => {
  try {
    const response = await api.post('rewards', { ...payload, home_id: homeId });
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

export default addReward;
