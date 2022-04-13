import api from './axiosInstance';

/**
 * @param {Object} payload
 * @param {number} payload.id
 * @param {string} payload.title
 * @param {string} payload.description
 * @param {function(null)} onSuccess
 * @param {function(string)} onError
 * @returns {Promise<void>}
 *
 */
export const updateReward = async (payload, onSuccess, onError) => {
  try {
    await api.patch('reward', payload);
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

export default updateReward;
