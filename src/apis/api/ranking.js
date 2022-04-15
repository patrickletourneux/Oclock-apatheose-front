import api from './axiosInstance';

// eslint-disable-next-line no-unused-vars
const responseDataMock = {
  users: [
    {
      id: 1,
      pseudonym: 'Axel',
      avatar_img: null,
      // score from 0 to ++
      score: 512,
      // rank from 1 to ++
      rank: 2,
    },
    {
      id: 45,
      pseudonym: 'Patrick',
      avatar_img: 'https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg',
      // score from 0 to ++
      score: 603,
      // rank from 1 to ++
      rank: 1,
    },
  ],
  reward: {
    id: 5,
    title: 'Massage Californien',
    description: 'Un massage californien',
    end_at: '2022-04-08 15:09:14.538557+02',
  },
};

/**
 * @param {number} homeId
 * @param {function(object)} onSuccess
 * @param {function(string)} onError
 * @returns {Promise<void>}
 *
 */
const getRankingPage = async (homeId, onSuccess, onError) => {
  try {
    const response = await api.get(`ranking/${homeId}`);
    onSuccess(response.data);
  } catch (error) {
    if (error.response && (error.response.status === 400 || error.response.status === 404)) {
      onError(error.response.data.message);
    } else {
      onError('Une erreur est survenue, veuillez réessayer plus tard');
    }
  }
};

export default getRankingPage;
