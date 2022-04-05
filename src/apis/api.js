import axios from 'axios';

const api = axios.create({
  baseURL: 'http://54.37.154.200:10000/api/v1/',
});

export const signin = async ({ email, password }, setData, setError) => {
  try {
    const response = await api.post('signin', {
      email,
      password,
    });
    setData(response.data);
  } catch (error) {
    if (error.status === 400)
      setError(error.data);
    else
      setError('Une erreur est survenue, veuillez réessayer plus tard');
  }
};
