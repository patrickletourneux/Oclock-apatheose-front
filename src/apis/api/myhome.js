import api from './axiosInstance';

// eslint-disable-next-line no-unused-vars
const responseDataMock = {
  id: 65,
  name: 'La Maison des Letourneux',
  home_tasks: [
    {
      id: 5,
      name: 'Sortir les poubelles',
      value: 10,
    },
    {
      id: 12,
      name: 'Sortir le chien',
      value: 20,
    },
    {
      id: 45,
      name: 'Passer le balai dans la chambre',
      value: 20,
    },
  ],
  users: [
    {
      id: 1,
      pseudonym: 'Guillaume',
      avatar_img: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
    },
    {
      id: 67,
      pseudonym: 'Anne',
      avatar_img: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
    },
    {
      id: 94,
      pseudonym: 'Amélie',
      avatar_img: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
    },
    {
      id: 12,
      pseudonym: 'Patrick',
      avatar_img: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
    },
  ],
};

/**
 * @param {number} homeId
 * @param {function(object)} onSuccess
 * @param {function(string)} onError
 * @returns {Promise<void>}
 *
 */
const getMyhousePage = async (homeId, onSuccess, onError) => {
  try {
    const response = await api.get(`myhome/${homeId}`);
    onSuccess(response.data);
  } catch (error) {
    if (error.response.status === 400 || error.response.status === 404) {
      onError(error.response.data.message);
    } else {
      onError('Une erreur est survenue, veuillez réessayer plus tard');
    }
  }
};

export default getMyhousePage;
