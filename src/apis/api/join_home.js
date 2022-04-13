import api from './axiosInstance';

/**
 * @param {Object} payload
 * @param {string} payload.user_id
 * @param {string} payload.password
 * @param {function({
 *          home_id: number,
 *        })} onSuccess
 * @param {function(string)} onError
 * @returns {Promise<void>}
 *
 */
const joinHome = async (payload, onSuccess, onError) => {
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

export default joinHome;
