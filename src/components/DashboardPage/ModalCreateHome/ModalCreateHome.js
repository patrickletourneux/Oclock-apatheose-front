import { useContext, useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

import addHome from '../../../apis/api/homes';
import authContext from '../../../contexts/authContext';

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

function ModalJoinHome() {
  const { userData, setUserData } = useContext(authContext);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(defaultFormData);

  useEffect(() => {
    if (userData) {
      setData((oldData) => ({ ...oldData, user_id: userData.id }));
    }
  }, [userData]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e, reason) => {
    if (reason === 'backdropClick') {
      return;
    }
    setOpen(false);
    setData({ ...defaultFormData, user_id: userData.id });
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
            <DialogContentText>
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

export default ModalJoinHome;
