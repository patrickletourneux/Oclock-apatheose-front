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
export default function ModalMySpace({ userInfo, userId, getUserInfo }) {
  const { updateAuthData } = useContext(authContext);
  const [open, setOpen] = useState(false);
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

  function successUpdateUser(resSuccess) {
    getUserInfo();
    updateAuthData(userId);
    console.log(resSuccess);
  }

  function errorUpdateUser(resError) {
    console.log(resError);
  }

  function handleFieldChange(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log('données d\'origine : ', userInfo);
    console.log('nouvelles données : ', data);
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
    handleClose();
  };

  return (
    <Box textAlign="center">
      <Button type="Submit" variant="outlined" onClick={handleClickOpen}>
        Modifier
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle textAlign="center">Modifier vos informations</DialogTitle>
        <DialogContent>
          <DialogContentText textAlign="center" margin="20px">
            Vous pouvez modifier les champs suivants:
          </DialogContentText>
          <Box
            component="form"
            onSubmit={submit}
          >
            <TextField
              onChange={(e) => handleFieldChange(e)}
              name="email"
              value={data.email}
              margin="normal"
              label="Votre email"
              variant="outlined"
              fullWidth
            />
            <TextField
              margin="normal"
              autoComplete="false"
              name="pseudonym"
              label="Votre pseudonyme"
              onChange={(e) => handleFieldChange(e)}
              value={data.pseudonymnym}
              variant="outlined"
              fullWidth
            />
            <TextField
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={submit}>Valider</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
