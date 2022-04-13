import api from './axiosInstance';

/**
 * @param {Object} payload
 * @param {string} payload.user_id
 * @param {string} payload.name
 * @param {Array} payload.tasks
 * @param {Array} payload.invitations
 * @param {Object} payload.reward
 * @param {string} payload.reward.title
 * @param {string} payload.reward.description
 * @param {function({
 *          home_id: number,
 *        })} onSuccess
 * @param {function(string)} onError
 * @returns {Promise<void>}
 *
 */
const addHome = async (payload, onSuccess, onError) => {
  try {
    const response = await api.post('homes', payload);
    onSuccess(response.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      onError(error.response.data.message);
    } else {
      onError('Une erreur est survenue, veuillez réessayer plus tard');
    }
  }
};

export default addHome;
