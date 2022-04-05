import api from './axiosInstance';

/**
 * @param {Object} payload
 * @param {string} payload.email
 * @param {string} payload.password
 * @param {string} payload.pseudonym
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
export const addUser = async (payload, setData, setError) => {
  try {
    const response = await api.post('users', {
      data: payload,
    });
    setData(response.data);
  } catch (error) {
    if (error.status === 400) {
      setError(error.data);
    } else {
      setError('Une erreur est survenue, veuillez réessayer plus tard');
    }
  }
};

/**
 * @param {number} userId
 * @param {function({
 *   id: number,
 *   pseudonym: string,
 *   avatar_img: string,
 *   email: string,
 *   password: string,
 *   home_id: number,
 *   created_at: string,
 * })} setData
 * @param {function(string)} setError
 * @returns {Promise<void>}
 *
 */
export const getUser = async (userId, setData, setError) => {
  try {
    const response = await api.get(`users/${userId}`);
    setData(response.data);
  } catch (error) {
    if (error.status === 400) {
      setError(error.data);
    } else {
      setError('Une erreur est survenue, veuillez réessayer plus tard');
    }
  }
};
