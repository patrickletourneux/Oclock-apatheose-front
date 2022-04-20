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
 * @returns {Promise<Object>}
 *
 */
const getMyhousePage = async (homeId) => {
  try {
    const response = await api.get(`myhome/${homeId}`);
    return response.data;
  } catch (error) {
    let errorMessage;
    if (error.response && error.response.status === 400) {
      errorMessage = error.response.data.message;
    } else {
      errorMessage = 'Une erreur est survenue, veuillez réessayer plus tard';
    }
    throw new Error(errorMessage);
  }
};

export default getMyhousePage;
