import { useContext, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Typography,
  List, ListItem, ListItemIcon, ListItemText,
  Collapse, Alert, IconButton,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';

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
import PageNoHome from '../PageNoHome/PageNoHome';

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
  const [displayInvitesConfirmed, setDisplayInvitesConfirmed] = useState(false);

  const hasHome = !!(
    userData
    && (userData?.home_id || userData?.home_id === 0)
  );

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
      <Box
        display="flex"
        flexDirection="row"
        // flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}
      >
        <Box>
          <HomeIcon
            sx={{
              fontSize: '40px',
              marginTop: { xs: '30px', md: '0px' },
              color: '#20c2cf',
            }}
          />
        </Box>
        <Box>
          <PageTitle color="#20c2cf">Ma maison</PageTitle>
        </Box>
      </Box>
      <Tile
        width="100%"
        minHeight="70px"
        sx={{ background: 'linear-gradient(90deg, #F78F8F 40%, #E0547A);' }}
      >
        <Typography
          fontSize={20}
          color="white"
          textAlign="center"
          padding="10px"
        >
          “La poubelle...
        </Typography>
        <Typography
          fontSize={20}
          color="white"
          textAlign="center"
          padding="5px"
        >
          est le meilleur accessoire de rangement”
        </Typography>
        <Typography fontSize={15} color="white" textAlign="center">
          <img
            width={25}
            src="https://img.icons8.com/fluency-systems-regular/48/000000/murder.png"
            alt="dexter"
          />
          ...Dexter
        </Typography>
      </Tile>
      <PageLoader isDisplayed={loading} />
      <PageError error={error} />
      <PageNoHome hasHome={hasHome} />
      {!loading && formData && (
        <TileContainer>
          <Tile textAlign="center" maxHeight="700px">
            <TileTitle>{formData.name}</TileTitle>
            <Typography
              sx={{ marginTop: '1rem', fontSize: '1.5rem', fontWeight: '600' }}
            >
              Code d'invitation dans la maison :
            </Typography>
            <Typography
              border="1px solid #36D1DC"
              borderRadius="3px"
              width="50%"
              margin="2rem auto"
              padding="1rem"
              sx={{ fontSize: '2rem', fontWeight: '800' }}
            >
              {formData.password}
            </Typography>
            <Box sx={{
              display: 'flex', flexDirection: 'column', gap: '1rem', padding: '20px', marginTop: '2rem',
            }}
            >
              <ModalModifyHomeName
                onModalValidation={getPageData}
              />
              <Box>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => setOpenLeaveHomeModal(true)}
                >
                  Quitter la maison
                </Button>
                <ModalConfirmation
                  open={openLeaveHomeModal}
                  message={getLeavingConfirmationMessage(
                    formData.users.length,
                    formData.name,
                  )}
                  onConfirm={onLeaveHome}
                  onAbort={() => setOpenLeaveHomeModal(false)}
                />
              </Box>
            </Box>
          </Tile>
          <Tile textAlign="center">
            <TileTitle>Tâches disponibles</TileTitle>
            {!formData.home_tasks[0] && (
              <Typography sx={{ marginTop: '2rem' }}>Aucune tâche</Typography>
            )}
            <List sx={{ marginTop: '1rem' }}>
              {formData.home_tasks[0]
                && formData.home_tasks.map((task) => (
                  <ListItem
                    key={task.id}
                    secondaryAction={task.value}
                    sx={{
                      height: '60px',
                      width: 'auto',
                      backgroundColor: '#46C2CF',
                      borderRadius: '7px',
                      margin: '15px 15px',
                      padding: '15px',
                      fontSize: '20px',
                      fontWeight: '600',
                      fontFamily: 'Nunito',
                      color: 'white',
                      boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;',
                    }}
                  >
                    <ListItemText primary={(
                      <Typography
                        sx={{
                          width: '80%',
                          fontWeight: '700',
                          color: 'white',
                          fontSize: '20px',
                          padding: '5px',
                        }}
                      >
                        {task.name}
                      </Typography>
                    )}
                    />
                  </ListItem>
                ))}
            </List>
            <ModalCreateTask
              onModalValidation={getPageData}
              sx={{ marginTop: '1rem' }}
            />
          </Tile>
          <Tile textAlign="center">
            <TileTitle>Liste des participants</TileTitle>
            <Box sx={{ width: '100%' }}>
              <Collapse in={displayInvitesConfirmed}>
                <Alert
                  action={(
                    <IconButton
                      aria-label="close"
                      size="small"
                      onClick={() => setDisplayInvitesConfirmed(false)}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  )}
                >
                  Les invitations ont bien été envoyées !
                </Alert>
              </Collapse>
            </Box>
            <List sx={{ marginTop: '2rem' }}>
              {formData.users.map((user) => (
                <ListItem
                  key={user.id}
                  sx={{ maxWidth: '20rem', margin: '0 auto' }}
                >
                  <ListItemIcon>
                    <UserAvatar pseudonym={user.pseudonym} />
                  </ListItemIcon>
                  <ListItemText
                    primary={(
                      <Typography
                        sx={{
                          fontWeight: '700',
                          fontSize: '20px',
                          padding: '5px',
                        }}
                      >
                        {user.pseudonym}
                      </Typography>
                    )}
                  />
                </ListItem>
              ))}
            </List>
            <ModalInvite sx={{ marginTop: '2rem' }} onModalValidation={(nbOfInvites) => setDisplayInvitesConfirmed(!!nbOfInvites)} />
          </Tile>
        </TileContainer>
      )}
    </PageContainer>
  );
}

export default MyhousePage;
