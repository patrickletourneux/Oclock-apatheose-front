import api from './axiosInstance';

// eslint-disable-next-line no-unused-vars
const oneHomeDataMock = {
  home: {
    id: 56,
    name: 'maison des Letourneux',
    userCount: 12,
  },
  reward: {
    id: 5,
    title: 'Massage Californien',
    end_at: '2022-04-08 15:09:14.538557+02',
  },
  tasks: {
    user_attributed_tasks_count: 3,
    user_done_tasks_count: 5,
  },
  ranking: {
    first_user: {
      id: 45,
      pseudonym: 'Patrick',
      avatar_img: 'https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg',
      score: 603,
    },
    current_user: {
      id: 1,
      pseudonym: 'Axel',
      avatar_img: 'https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg',
      score: 512,
      rank: 2,
    },
  },
};

// eslint-disable-next-line no-unused-vars
const noHomeDataMock = {};

/**
 * @param {number} userId
 * @param {function(object)} onSuccess
 * @param {function(string)} onError
 * @returns {Promise<void>}
 *
 */
const getDashboardPage = async (userId, onSuccess, onError) => {
  try {
    const response = await api.get(`dashboard/${userId}`);
    onSuccess(response.data);
  } catch {
    onError('Une erreur est survenue, veuillez réessayer plus tard');
  }
};

export default getDashboardPage;
