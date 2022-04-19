import { useContext, useEffect, useState } from 'react';
import {
  Box,
  Button, List,
  ListItem, ListItemIcon,
  ListItemText,
  Typography,
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

function MyhousePage() {
  const { userData } = useContext(authContext);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData, hasHome]);

  return (
    <PageContainer>
      <PageTitle>Ma Maison</PageTitle>
      <PageLoader isDisplayed={loading} />
      <PageError error={error} />
      {!loading && formData && (
        <TileContainer>
          <Tile textAlign="center">
            <Typography>Nom</Typography>
            <Typography>{formData.name}</Typography>
            <Box marginTop="3rem">
              <ModalModifyHomeName onModalValidation={getPageData} />
            </Box>
            <Typography>Tâches disponibles</Typography>
            <List>
              {formData.home_tasks.map((task) => (
                <ListItem
                  key={task.id}
                  secondaryAction={task.value}
                  sx={{ maxWidth: '20rem', margin: '0 auto' }}
                >
                  <ListItemText primary={task.name} />
                </ListItem>
              ))}
            </List>
            <ModalCreateTask onModalValidation={getPageData} />
            <Typography>List des participants</Typography>
            <List>
              {formData.users.map((user) => (
                <ListItem key={user.id} sx={{ maxWidth: '20rem', margin: '0 auto' }}>
                  <ListItemIcon><UserAvatar pseudonym={user.pseudonym} /></ListItemIcon>
                  <ListItemText primary={user.pseudonym} />
                </ListItem>
              ))}
            </List>
            <Button variant="contained">Inviter de nouveaux participants</Button>
            <Button variant="contained">Quitter la maison</Button>
          </Tile>
        </TileContainer>
      )}
    </PageContainer>
  );
}

export default MyhousePage;
