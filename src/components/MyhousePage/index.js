import { useContext, useEffect, useState } from 'react';
import {
  Box, Button, Typography,
  List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';

import authContext from '../../contexts/authContext';
import PageContainer from '../PageContainer/PageContainer';
import PageTitle from '../PageTitle/PageTitle';
import PageLoader from '../PageLoader/PageLoader';
import PageError from '../PageError/PageError';
import TileContainer from '../Tile/TileContainer';
import Tile from '../Tile/Tile';
import getMyhousePage from '../../apis/api/myhome';
import ModalCreateTask from '../ModalCreateTask/ModalCreateTask';
import UserAvatar from '../UserAvatar/UserAvatar';
import ModalModifyHomeName from './ModalModifyHomeName';
import TileTitle from '../Tile/TileTitle';
import ModalConfirmation from './ModalConfirmation';
import ModalInvite from './ModalInvite';
import { leaveHome } from '../../apis/api/join_home';

const getLeavingConfirmationMessage = (usersCount, homeName) => {
  if (usersCount > 1) {
    return `Souhaitez-vous quitter '${homeName}' ?`;
  }
  return `Souhaitez-vous supprimer '${homeName}' ?`;
};

function MyhousePage() {
  const { userData, updateAuthData } = useContext(authContext);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [openLeaveHomeModal, setOpenLeaveHomeModal] = useState(false);

  const hasHome = !!(userData && (userData?.home_id || userData?.home_id === 0));

  const getPageData = async () => {
    setLoading(true);
    setError('');
    await getMyhousePage(userData.home_id)
      .then((apiData) => setFormData(apiData))
      .catch((errorObj) => setError(errorObj.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (hasHome) {
      getPageData();
    } else if (!hasHome && userData) {
      setLoading(false);
      setFormData(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData, hasHome]);

  const onLeaveHome = async () => {
    setOpenLeaveHomeModal(false);
    setLoading(true);
    setError('');
    try {
      await leaveHome(userData.id, userData.home_id);
      await updateAuthData(userData.id);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <PageContainer>
      <PageTitle>Ma Maison</PageTitle>
      <PageLoader isDisplayed={loading} />
      <PageError error={error} />
      {!loading && formData && (
        <TileContainer>
          <Tile textAlign="center">
            <TileTitle>{formData.name}</TileTitle>
            <Typography sx={{ marginTop: '1rem' }}>
              {`Code d'invitation dans la maison : ${formData.password}`}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ModalModifyHomeName onModalValidation={getPageData} sx={{ marginTop: '2rem' }} />
              <div>
                <Button variant="outlined" color="error" onClick={() => setOpenLeaveHomeModal(true)}>
                  Quitter la maison
                </Button>
                <ModalConfirmation
                  open={openLeaveHomeModal}
                  message={getLeavingConfirmationMessage(formData.users.length, formData.name)}
                  onConfirm={onLeaveHome}
                  onAbort={() => setOpenLeaveHomeModal(false)}
                />
              </div>
            </Box>
          </Tile>
          <Tile textAlign="center">
            <TileTitle>Tâches disponibles</TileTitle>
            {!formData.home_tasks[0] && <Typography sx={{ marginTop: '2rem' }}>Aucune tâches</Typography>}
            <List sx={{ marginTop: '1rem' }}>
              {formData.home_tasks[0] && formData.home_tasks.map((task) => (
                <ListItem
                  key={task.id}
                  secondaryAction={task.value}
                  sx={{ maxWidth: '20rem', margin: '0 auto' }}
                >
                  <ListItemText primary={task.name} />
                </ListItem>
              ))}
            </List>
            <ModalCreateTask onModalValidation={getPageData} sx={{ marginTop: '1rem' }} />
          </Tile>
          <Tile textAlign="center">
            <TileTitle>List des participants</TileTitle>
            <List sx={{ marginTop: '2rem' }}>
              {formData.users.map((user) => (
                <ListItem key={user.id} sx={{ maxWidth: '20rem', margin: '0 auto' }}>
                  <ListItemIcon><UserAvatar pseudonym={user.pseudonym} /></ListItemIcon>
                  <ListItemText primary={user.pseudonym} />
                </ListItem>
              ))}
            </List>
            <ModalInvite sx={{ marginTop: '2rem' }} />
          </Tile>
        </TileContainer>
      )}
    </PageContainer>
  );
}

export default MyhousePage;
