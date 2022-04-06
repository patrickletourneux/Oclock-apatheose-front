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
 *   })} setData
 * @param {function(string)} setError
 * @returns {Promise<void>}
 *
 */
const signin = async (payload, setData, setError) => {
  try {
    const response = await api.post('signin', payload);
    setData(response.data);
  } catch (error) {
    if (error.status === 400) {
      setError(error.data);
    } else {
      setError('Une erreur est survenue, veuillez réessayer plus tard');
    }
  }
};

export default signin;
