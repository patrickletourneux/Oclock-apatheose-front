import { useContext, useEffect, useState } from 'react';
import { Button } from '@mui/material';

import authContext from '../../contexts/authContext';
import PageContainer from '../PageContainer/PageContainer';
import PageTitle from '../PageTitle/PageTitle';
import PageLoader from '../PageLoader/PageLoader';
import PageError from '../PageError/PageError';
import TileContainer from '../Tile/TileContainer';
import getMytasksPage from '../../apis/api/mytasks';
import Tile from '../Tile/Tile';
import TileTitle from '../Tile/TileTitle';
import TaskList from './TaskList';

const mapToFormData = (apiData) => {
  const formData = {};

  const mapToFormTask = (apiTask) => ({
    id: apiTask.id,
    name: apiTask.name,
    value: apiTask.value,
  });

  formData.doneTasks = apiData.done_tasks
    .map(mapToFormTask);
  formData.homeTasks = apiData.home_tasks
    .filter((task) => task.attributed === false)
    .map(mapToFormTask);
  formData.attributedTasks = apiData.home_tasks
    .filter((task) => task.attributed === true)
    .map(mapToFormTask);
  return formData;
};

function MytasksPage() {
  const { userData } = useContext(authContext);
  // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const hasHome = !!(userData && (userData?.home_id || userData?.home_id === 0));

  useEffect(() => {
    if (hasHome) {
      setLoading(true);
      setError('');
      getMytasksPage(userData.id)
        .then((apiData) => setFormData(mapToFormData(apiData)))
        .catch((errorObj) => setError(errorObj.message))
        .finally(() => setLoading(false));
    } else if (!hasHome && userData) {
      setLoading(false);
    }
  }, [userData, hasHome]);

  return (
    <PageContainer>
      <PageTitle>Mes Tâches</PageTitle>
      <PageLoader isDisplayed={loading} />
      <PageError error={error} />
      {!loading && formData && (
        <TileContainer textAlign="center">
          <Tile>
            <TileTitle>Mes tâches attribuées</TileTitle>
            <TaskList tasks={formData.attributedTasks} />
          </Tile>
          <Tile>
            <TileTitle>Liste des tâches disponibles</TileTitle>
            <TaskList tasks={formData.homeTasks} />
            <Button
              variant="contained"
            >
              Créer une tâche
            </Button>
          </Tile>
          <Tile>
            <TileTitle>Mes tâches réalisées</TileTitle>
            <TaskList tasks={formData.doneTasks} />
          </Tile>
        </TileContainer>
      )}
    </PageContainer>
  );
}

export default MytasksPage;
