import { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';

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
import ModalCreateTask from '../ModalCreateTask/ModalCreateTask';
import { addAttributedTask, removeAttributedTask } from '../../apis/api/attributed_tasks';
import addDoneTask from '../../apis/api/done_tasks';
import ModalActionTask from './ModalActionTask';

const LIST_NAME = {
  ATTRIBUTED: 'attributedTasks',
  HOME: 'homeTasks',
  DONE: 'doneTasks',
};

const mapToFormData = (apiData) => {
  const formData = {};

  const mapToFormTask = (apiTask) => ({
    id: apiTask.id,
    name: apiTask.name,
    value: apiTask.value,
  });

  formData[LIST_NAME.DONE] = apiData.done_tasks.done_task
    ? apiData.done_tasks.done_task.map(mapToFormTask)
    : [];
  formData[LIST_NAME.HOME] = apiData.home_tasks
    .filter((task) => task.attributed === false)
    .map(mapToFormTask);
  formData[LIST_NAME.ATTRIBUTED] = apiData.home_tasks
    .filter((task) => task.attributed === true)
    .map(mapToFormTask);
  return formData;
};

function MytasksPage() {
  const { userData } = useContext(authContext);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [modalTask, setModalTask] = useState(null);

  const hasHome = !!(userData && (userData?.home_id || userData?.home_id === 0));

  const getPageData = async () => {
    setLoading(true);
    setError('');
    await getMytasksPage(userData.id)
      .then((apiData) => setFormData(mapToFormData(apiData)))
      .catch((errorObj) => setError(errorObj.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (hasHome) {
      getPageData();
    } else if (!hasHome && userData) {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData, hasHome]);

  const attributeTask = async (attributedTaskId) => {
    try {
      setError('');
      const attributedTask = formData[LIST_NAME.HOME]
        .find((task) => task.id === attributedTaskId);
      addAttributedTask({ home_task_id: attributedTask.id }, userData.id);
      setFormData({
        attributedTasks: formData[LIST_NAME.ATTRIBUTED].concat([attributedTask]),
        homeTasks: formData[LIST_NAME.HOME].filter((task) => task.id !== attributedTask.id),
        doneTasks: formData[LIST_NAME.DONE],
      });
    } catch (e) {
      await getPageData();
      setError(e.message);
    }
  };

  const unattributeTask = async (unattributedTaskId) => {
    try {
      setError('');
      const unattributedTask = formData[LIST_NAME.ATTRIBUTED]
        .find((task) => task.id === unattributedTaskId);
      removeAttributedTask(unattributedTask.id);
      setFormData({
        attributedTasks: formData[LIST_NAME.ATTRIBUTED]
          .filter((task) => task.id !== unattributedTask.id),
        homeTasks: formData[LIST_NAME.HOME]
          .concat([unattributedTask]),
        doneTasks: formData[LIST_NAME.DONE],
      });
    } catch (e) {
      await getPageData();
      setError(e.message);
    }
  };

  const doTask = async (doneTaskId, originListName) => {
    try {
      setError('');
      setLoading(true);
      const doneTask = formData[originListName].find((task) => task.id === doneTaskId);
      await addDoneTask(
        { name: doneTask.name, value: doneTask.value },
        userData.id,
        userData.home_id,
      );
      getPageData();
    } catch (e) {
      await getPageData();
      setError(e.message);
    }
  };

  const onDragEnd = (e) => {
    if (!e.destination) return;
    if (e.source.droppableId === LIST_NAME.ATTRIBUTED
      && e.destination.droppableId === LIST_NAME.HOME) {
      unattributeTask(Number(e.draggableId));
    } else if (e.source.droppableId === LIST_NAME.HOME
      && e.destination.droppableId === LIST_NAME.ATTRIBUTED) {
      attributeTask(Number(e.draggableId));
    } else if (e.source.droppableId !== LIST_NAME.DONE
      && e.destination.droppableId === LIST_NAME.DONE) {
      doTask(Number(e.draggableId), e.source.droppableId);
    }
  };

  const onModalTaskDelete = () => {
    unattributeTask(modalTask.id);
    setModalTask(null);
  };

  const onModalTaskDone = () => {
    doTask(modalTask.id, LIST_NAME.ATTRIBUTED);
    setModalTask(null);
  };

  const onModalAbort = () => {
    setModalTask(null);
  };

  return (
    <PageContainer>
      <PageTitle>Mes Tâches</PageTitle>
      <PageLoader isDisplayed={loading} />
      <PageError error={error} />
      {!loading && formData && (
        <TileContainer textAlign="center">
          <DragDropContext onDragEnd={onDragEnd}>
            <Tile>
              <TileTitle>Mes tâches attribuées</TileTitle>
              <TaskList
                tasks={formData[LIST_NAME.ATTRIBUTED]}
                droppableId="attributedTasks"
                onTaskClick={setModalTask}
              />
            </Tile>
            <Tile>
              <TileTitle>Liste des tâches disponibles</TileTitle>
              <TaskList
                tasks={formData[LIST_NAME.HOME]}
                droppableId="homeTasks"
                onTaskClick={(task) => attributeTask(task.id)}
              />
              <ModalActionTask
                task={modalTask}
                onTaskDelete={onModalTaskDelete}
                onTaskDone={onModalTaskDone}
                onAbort={onModalAbort}
              />
              <Box marginTop="3rem">
                <ModalCreateTask onModalValidation={getPageData} />
              </Box>
            </Tile>
            <Tile>
              <TileTitle>Mes tâches réalisées</TileTitle>
              <TaskList
                tasks={formData[LIST_NAME.DONE]}
                droppableId="doneTasks"
                isDragDisabled
              />
            </Tile>
          </DragDropContext>
        </TileContainer>
      )}
    </PageContainer>
  );
}

export default MytasksPage;
