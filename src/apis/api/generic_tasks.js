// eslint-disable-next-line no-unused-vars
import api from './axiosInstance';

// eslint-disable-next-line no-unused-vars
const responseDataMock = {
  generic_tasks: [
    {
      id: 5,
      name: 'Passer l\'aspirateur',
      value: 20,
    },
    {
      id: 3,
      name: 'Faire la vaisselle',
      value: 20,
    },
    {
      id: 2,
      name: 'Sortir les poubelles',
      value: 5,
    },
  ],
};

/**
 * @param {function({
 *   id: number,
 *   pseudonym: string,
 *   avatar_img: string,
 *   email: string,
 *   password: string,
 *   home_id: number,
 *   created_at: string,
 * })} onSuccess
 * @param {function(string)} onError
 * @returns {Promise<void>}
 *
 */
const getGenericTasks = async (onSuccess, onError) => {
  try {
    const response = await api.get('generic_tasks');
    onSuccess(response.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      onError(error.response.data.message);
    } else {
      onError('Une erreur est survenue, veuillez réessayer plus tard');
    }
  }
};

export default getGenericTasks;
