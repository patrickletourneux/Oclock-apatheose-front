import api from './axiosInstance';

/**
 * @param {Object} payload
 * @param {string} payload.name
 * @param {number} payload.value
 * @param {number} userId
 * @param {number} homeId
 * @returns {Promise<Object>}
 *
 */
const addDoneTask = async (payload, userId, homeId) => {
  try {
    const response = await api.post('done_tasks', { ...payload, user_id: userId, home_id: homeId });
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

export default addDoneTask;
