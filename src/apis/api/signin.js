import api from './axiosInstance';

/**
 * @param {Object} payload
 * @param {string} payload.email
 * @param {string} payload.password
 * @param {function({
 *   token: string,
 *   user: {
 *     id: number,
 *     pseudonym: string,
 *     avatar_img: string,
 *   }
 *   })} onSuccess
 * @param {function(string)} onError
 * @returns {Promise<void>}
 *
 */
const signin = async (payload, onSuccess, onError) => {
  try {
    const response = await api.post('signin', payload);
    onSuccess(response.data);
  } catch (error) {
    if (error.response.status === 400 || error.response.status === 404) {
      onError(error.response.data.message);
    } else {
      onError('Une erreur est survenue, veuillez réessayer plus tard');
    }
  }
};

export default signin;
