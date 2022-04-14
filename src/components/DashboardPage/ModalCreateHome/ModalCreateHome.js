import { useContext, useEffect, useState } from 'react';
import {
  Box,
  Button, Checkbox,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  TextField, Tooltip,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

import addHome from '../../../apis/api/homes';
import authContext from '../../../contexts/authContext';
import getGenericTasks from '../../../apis/api/generic_tasks';

const defaultFormData = {
  user_id: null,
  name: '',
  tasks: [],
  invitations: [],
  reward: {
    title: '',
    description: '',
  },
};

const initGenericTasks = (genericTasks) => (
  genericTasks.map((genTask, index) => ({ ...genTask, checked: index === 0 }))
);

function ModalCreateHome() {
  const { userData, setUserData } = useContext(authContext);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(defaultFormData);
  const [genericTasks, setGenericTasks] = useState([]);

  // Add user_id to data
  useEffect(() => {
    if (userData) {
      setData((oldData) => ({ ...oldData, user_id: userData.id }));
    }
  }, [userData]);

  // Fetch genericTasks collection
  useEffect(() => {
    getGenericTasks(
      (resData) => {
        setGenericTasks(initGenericTasks(resData.generic_tasks));
      },
      () => {},
    );
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e, reason) => {
    if (reason === 'backdropClick') {
      return;
    }
    setOpen(false);
    setData({ ...defaultFormData, user_id: userData.id });
    setGenericTasks(initGenericTasks(genericTasks));
    setError('');
  };

  function handleFieldChange(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    addHome(
      data,
      (response) => {
        setUserData({ ...userData, home_id: response.home_id });
        setLoading(false);
        setOpen(false);
      },
      (errorMessage) => {
        setLoading(false);
        setError(errorMessage);
      },
    );
  };

  const onSelectTaskHandler = (selectedTask) => () => {
    setGenericTasks(genericTasks.map((genTask) => {
      if (genTask.id === selectedTask.id) {
        return ({ ...genTask, checked: !genTask.checked });
      }
      return genTask;
    }));
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Ajouter
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <form onSubmit={onSubmitHandler}>
          <DialogTitle>
            Création de votre maison
          </DialogTitle>
          <DialogContent>
            <DialogContentText marginTop="1rem">
              1. Donnes un nom à ta maison
            </DialogContentText>
            <TextField
              autoFocus
              name="name"
              label="Nom de la maison"
              value={data.name}
              onChange={(e) => handleFieldChange(e)}
              fullWidth
              sx={{ marginTop: '1rem' }}
              required
            />
            <DialogContentText marginTop="3rem">
              2. Définis la liste de tâches disponible pour tout le monde
            </DialogContentText>
            <List>
              {genericTasks.map((genTask) => (
                <ListItem key={genTask.id} disablePadding secondaryAction={genTask.value}>
                  <ListItemButton dense role={undefined} onClick={onSelectTaskHandler(genTask)}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={genTask.checked}
                        tabIndex={-1}
                        inputProps={{ 'aria-labelledby': genTask.id }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={genTask.id}
                      primary={`${genTask.name}`}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Box textAlign="center">
              <Tooltip
                title="Vous pourrez en créer plus tard"
                placement="top"
                enterTouchDelay={1}
              >
                <span>
                  <Button
                    variant="contained"
                    disabled
                  >
                    Créer une tâche
                  </Button>
                </span>
              </Tooltip>
            </Box>
            <DialogContentText color="error" marginTop="1rem">
              {error}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>
              Revenir à la page d'accueil
            </Button>
            <LoadingButton loading={loading} type="submit">
              Valider
            </LoadingButton>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default ModalCreateHome;
