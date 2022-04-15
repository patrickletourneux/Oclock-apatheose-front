import api from './axiosInstance';

// eslint-disable-next-line no-unused-vars
const responseDataMock = {
  home_tasks: [
    {
      id: 10,
      name: 'Mettre sa biere vide a la poubelle',
      value: 40,
      attributed: true,
    },
    {
      id: 23,
      name: 'Boire une biere',
      value: 350,
      attributed: true,
    },
    {
      id: 4,
      name: 'Passer l\'aspirateur',
      value: 20,
      attributed: false,
    },
    {
      id: 63,
      name: 'Faire la vaisselle',
      value: 30,
      attributed: false,
    },
  ],
  done_tasks: [
    {
      id: 42,
      name: 'Tondre la pelouse',
      value: 50,
    },
  ],
};

/**
 * @param {number} userId
 * @returns {Promise<Object>}
 *
 */
const getMytasksPage = async (userId) => {
  try {
    const response = await api.get(`mytasks/${userId}`);
    return response.data;
  } catch {
    throw new Error('Une erreur est survenue, veuillez réessayer plus tard');
  }
};

export default getMytasksPage;
