import api from './axiosInstance';

// eslint-disable-next-line no-unused-vars
const responseDataMock = {
  home_tasks: [
    {
      id: 10,
      name: 'Mettre sa biere vide a la poubelle',
      value: '40',
      attributed: true,
    },
    {
      id: 23,
      name: 'Boire une biere',
      value: '350',
      attributed: true,
    },
    {
      id: 4,
      name: 'Passer l\'aspirateur',
      value: '20',
      attributed: false,
    },
    {
      id: 63,
      name: 'Faire la vaisselle',
      value: '30',
      attributed: false,
    },
  ],
  done_tasks: [
    {
      id: 42,
      name: 'Tondre la pelouse',
      value: '50',
    },
  ],
};

/**
 * @param {number} userId
 * @param {function({object})} onSuccess
 * @param {function(string)} onError
 * @returns {Promise<void>}
 *
 */
const getMytasksPage = async (userId, onSuccess, onError) => {
  try {
    const response = await api.get(`mytasks/${userId}`);
    onSuccess(response.data);
  } catch (error) {
    if (error.response && (error.response.status === 400 || error.response.status === 404)) {
      onError(error.response.data.message);
    } else {
      onError('Une erreur est survenue, veuillez réessayer plus tard');
    }
  }
};

export default getMytasksPage;
