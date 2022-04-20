import api from './axiosInstance';

/**
 * @param {Object} payload
 * @param {string} payload.user_id
 * @param {string} payload.home_password
 * @param {function({
 *          home_id: number,
 *        })} onSuccess
 * @param {function(string)} onError
 * @returns {Promise<void>}
 *
 */
export const joinHome = async (payload, onSuccess, onError) => {
  try {
    const response = await api.post('join_home', payload);
    onSuccess(response.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      onError(error.response.data.message);
    } else {
      onError('Une erreur est survenue, veuillez réessayer plus tard');
    }
  }
};

/**
 * @param {number} userId
 * @param {number} homeId
 * @returns {Promise<Object>}
 *
 */
export const leaveHome = async (userId, homeId) => {
  try {
    const response = await api.delete(`join_home/${homeId}`, { data: { user_id: userId } });
    return response.data;
  } catch (error) {
    const errorMessage = 'Une erreur est survenue, veuillez réessayer plus tard';
    throw new Error(errorMessage);
  }
};
