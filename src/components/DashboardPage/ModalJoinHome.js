import { useContext, useState } from 'react';
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

import joinHome from '../../apis/api/join_home';
import authContext from '../../contexts/authContext';

function ModalJoinHome() {
  const { userData, setUserData } = useContext(authContext);
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCode('');
    setError('');
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    joinHome(
      { user_id: userData.id, home_password: code },
      (response) => {
        setUserData({ ...userData, home_id: response.home_id });
        setLoading(false);
        setOpen(false);
      },
      (errorMessage) => {
        setError(errorMessage);
        setLoading(false);
      },
    );
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Rejoindre
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <form onSubmit={onSubmitHandler}>
          <DialogTitle>
            Rejoindre une Maison
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Veuillez renseigner le code de la maison
            </DialogContentText>
            <TextField
              autoFocus
              onChange={(e) => handleCodeChange(e)}
              value={code}
              label="Code"
              error={!!error}
              helperText={error}
              fullWidth
              sx={{ marginTop: '2rem' }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>
              Annuler
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
