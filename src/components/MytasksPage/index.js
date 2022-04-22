import { useContext, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';

import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
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
import {
  addAttributedTask,
  removeAttributedTask,
} from '../../apis/api/attributed_tasks';
import addDoneTask from '../../apis/api/done_tasks';
import ModalActionTask from './ModalActionTask';

const LIST_NAME = {
  ATTRIBUTED: 'attributedTasks',
  HOME: 'homeTasks',
  DONE: 'doneTasks',
};

const mapToFormData = (apiData) => {
  const formData = {};

  // eslint-disable-next-line react/function-component-definition
  const mapToFormTask = (listName) => (apiTask) => ({
    id: apiTask.id,
    attributedTaskId: apiTask.attributedTaskId,
    name: apiTask.name,
    value: apiTask.value,
    draggableId: listName === LIST_NAME.DONE ? `done${apiTask.id}` : null,
  });

  formData[LIST_NAME.DONE] = apiData.done_tasks.done_task
    ? apiData.done_tasks.done_task.map(mapToFormTask(LIST_NAME.DONE))
    : [];
  formData[LIST_NAME.HOME] = apiData.home_tasks
    .filter((task) => task.attributedTaskId === 0)
    .map(mapToFormTask(LIST_NAME.HOME));
  formData[LIST_NAME.ATTRIBUTED] = apiData.home_tasks
    .filter((task) => task.attributedTaskId > 0)
    .map(mapToFormTask(LIST_NAME.ATTRIBUTED));
  return formData;
};

function MytasksPage() {
  const { userData } = useContext(authContext);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [modalTask, setModalTask] = useState(null);

  const hasHome = !!(
    userData
    && (userData?.home_id || userData?.home_id === 0)
  );

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
      const attributedTask = formData[LIST_NAME.HOME].find(
        (task) => task.id === attributedTaskId,
      );
      setFormData({
        [LIST_NAME.ATTRIBUTED]: formData[LIST_NAME.ATTRIBUTED].concat([
          attributedTask,
        ]),
        [LIST_NAME.HOME]: formData[LIST_NAME.HOME].filter(
          (task) => task.id !== attributedTask.id,
        ),
        [LIST_NAME.DONE]: formData[LIST_NAME.DONE],
      });
      const response = await addAttributedTask(
        { home_task_id: attributedTask.id },
        userData.id,
      );
      setFormData((curFormData) => ({
        ...curFormData,
        [LIST_NAME.ATTRIBUTED]: curFormData[LIST_NAME.ATTRIBUTED].map(
          (task) => {
            if (task.id === attributedTask.id) {
              return { ...task, attributedTaskId: response.id };
            }
            return task;
          },
        ),
      }));
    } catch (e) {
      await getPageData();
      setError(e.message);
    }
  };

  const unattributeTask = async (unattributedTaskId) => {
    try {
      setError('');
      const unattributedTask = formData[LIST_NAME.ATTRIBUTED].find(
        (task) => task.id === unattributedTaskId,
      );
      removeAttributedTask(unattributedTask.attributedTaskId);
      setFormData({
        [LIST_NAME.ATTRIBUTED]: formData[LIST_NAME.ATTRIBUTED].filter(
          (task) => task.id !== unattributedTask.id,
        ),
        [LIST_NAME.HOME]: formData[LIST_NAME.HOME].concat([
          { ...unattributedTask, attributedTaskId: 0 },
        ]),
        [LIST_NAME.DONE]: formData[LIST_NAME.DONE],
      });
    } catch (e) {
      await getPageData();
      setError(e.message);
    }
  };

  const doTask = async (doneTaskId, originListName) => {
    try {
      setError('');
      const doneTask = formData[originListName].find(
        (task) => task.id === doneTaskId,
      );
      if (originListName === LIST_NAME.HOME) {
        setFormData({
          ...formData,
          [LIST_NAME.DONE]: formData[LIST_NAME.DONE].concat([
            { ...doneTask, id: 0 },
          ]),
        });
      } else if (originListName === LIST_NAME.ATTRIBUTED) {
        setFormData({
          [LIST_NAME.ATTRIBUTED]: formData[LIST_NAME.ATTRIBUTED].filter(
            (task) => task.id !== doneTask.id,
          ),
          [LIST_NAME.HOME]: formData[LIST_NAME.HOME].concat([
            { ...doneTask, attributedTaskId: 0 },
          ]),
          [LIST_NAME.DONE]: formData[LIST_NAME.DONE].concat([
            { ...doneTask, id: 0 },
          ]),
        });
      }
      const response = await addDoneTask(
        { name: doneTask.name, value: doneTask.value },
        userData.id,
        userData.home_id,
      );
      setFormData((curFormData) => ({
        ...curFormData,
        [LIST_NAME.DONE]: curFormData[LIST_NAME.DONE].map((task) => {
          if (task.id === 0) {
            return {
              ...task,
              id: response.id,
              draggableId: `done${response.id}`,
            };
          }
          return task;
        }),
      }));
    } catch (e) {
      await getPageData();
      setError(e.message);
    }
  };

  const onDragEnd = (e) => {
    if (!e.destination) return;
    if (
      e.source.droppableId === LIST_NAME.ATTRIBUTED
      && e.destination.droppableId === LIST_NAME.HOME
    ) {
      unattributeTask(Number(e.draggableId));
    } else if (
      e.source.droppableId === LIST_NAME.HOME
      && e.destination.droppableId === LIST_NAME.ATTRIBUTED
    ) {
      attributeTask(Number(e.draggableId));
    } else if (
      e.source.droppableId !== LIST_NAME.DONE
      && e.destination.droppableId === LIST_NAME.DONE
    ) {
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
      <Box
        display="flex"
        flexDirection="row"
        // flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}
      >
        <Box>
          <PlaylistAddCheckIcon
            sx={{
              fontSize: '40px',
              color: '#20c2cf',
              marginTop: { xs: '30px', md: '0px' },
            }}
          />
        </Box>
        <Box>
          <PageTitle color="#20c2cf">Mes tâches</PageTitle>
        </Box>
      </Box>
      <Tile
        width="100vw"
        minHeight="70px"
        sx={{ background: 'linear-gradient(90deg, #F78F8F 40%, #E0547A);' }}
      >
        <Typography fontSize={20} color="white" textAlign="center" padding="20px">
          “Rien ne tache et rien ne lave comme le sang.” {' '}
          <Typography fontSize={15} color="white" textAlign="center">
            <img
              width={25}
              src="https://img.icons8.com/ios/50/000000/targaryen-house.png"
              alt="lannister"
            />...Cercei Lannister
          </Typography>
        </Typography>
      </Tile>
      <PageLoader isDisplayed={loading} />
      <PageError error={error} />
      {!loading && formData && (
        <TileContainer textAlign="center">
          <DragDropContext onDragEnd={onDragEnd}>
            <Tile>
              <TileTitle>Mes tâches attribuées</TileTitle>
              <TaskList
                tasks={formData[LIST_NAME.ATTRIBUTED]}
                droppableId={LIST_NAME.ATTRIBUTED}
                onTaskClick={setModalTask}
              />
            </Tile>
            <Tile>
              <TileTitle>Liste des tâches disponibles</TileTitle>
              <TaskList
                tasks={formData[LIST_NAME.HOME]}
                droppableId={LIST_NAME.HOME}
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
                droppableId={LIST_NAME.DONE}
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
