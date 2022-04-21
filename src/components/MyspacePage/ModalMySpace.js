import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/material';

import { useContext, useState } from 'react';

import { updateUser } from '../../apis/api/users';
import authContext from '../../contexts/authContext';

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

// eslint-disable-next-line no-unused-vars,react/prop-types
export default function ModalMySpace({ userId }) {
  const { updateAuthData } = useContext(authContext);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState({
    email: '',
    pseudonym: '',
    password: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function successUpdateUser() {
    updateAuthData(userId);
    handleClose();
  }

  function errorUpdateUser(resError) {
    setError(resError);
  }

  function handleFieldChange(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  }

  const submit = (e) => {
    e.preventDefault();
    setError('');
    updateUser(
      userId,
      {
        email: data.email,
        pseudonym: data.pseudonym,
        password: data.password,
        avatar_img: 'url',
      },
      successUpdateUser,
      errorUpdateUser,
    );
  };

  return (
    <Box sx={{ padding: '30px' }} textAlign="center">
      <Button type="Submit" variant="contained" onClick={handleClickOpen}>
        Modifier
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
      >
        <form onSubmit={submit}>
          <DialogTitle textAlign="center">Modifier vos informations</DialogTitle>
          <DialogContent>
            <DialogContentText textAlign="center" margin="20px">
              Vous pouvez modifier les champs suivants:
            </DialogContentText>
            <Box>
              <TextField
                required
                onChange={(e) => handleFieldChange(e)}
                name="email"
                value={data.email}
                margin="normal"
                label="Votre email"
                variant="outlined"
                fullWidth
              />
              <TextField
                required
                margin="normal"
                autoComplete="false"
                name="pseudonym"
                label="Votre pseudonyme"
                onChange={(e) => handleFieldChange(e)}
                value={data.pseudonym}
                variant="outlined"
                fullWidth
              />
              <TextField
                required
                autoComplete="false"
                margin="normal"
                type="password"
                name="password"
                label="Votre password"
                onChange={(e) => handleFieldChange(e)}
                value={data.password}
                variant="outlined"
                fullWidth
              />
            </Box>
            <DialogContentText color="error" sx={{ marginTop: '1rem' }}>
              {error}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Annuler</Button>
            <Button type="submit">Valider</Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}
