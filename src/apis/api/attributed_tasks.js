import api from './axiosInstance';

/**
 * @param {Object} payload
 * @param {number} payload.home_task_id
 * @param {number} userId
 * @returns {Promise<Object>}
 *
 */
const addAttributedTask = async (payload, userId) => {
  try {
    const response = await api.post('attributed_tasks', { ...payload, user_id: userId });
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

export default addAttributedTask;
