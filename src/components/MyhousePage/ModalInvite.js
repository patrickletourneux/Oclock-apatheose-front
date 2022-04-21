/* eslint-disable react/no-array-index-key */
import { useContext, useState } from 'react';
import {
  Button, TextField,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
  IconButton, Box, ListItem, List,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';

import authContext from '../../contexts/authContext';
import addInvitation from '../../apis/api/invitation';

const getDefaultFormData = () => (['']);

function ModalInvite({ onModalValidation, ...otherProps }) {
  const { userData } = useContext(authContext);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState(getDefaultFormData());

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(getDefaultFormData());
    setError('');
  };

  const handleInvitationChange = (modifiedIndex) => (e) => {
    const newInvite = e.target.value;
    const newFormData = formData.map(
      (prevInvite, index) => (modifiedIndex === index ? newInvite : prevInvite),
    );
    setFormData(newFormData);
  };

  const onAddInviteClick = () => {
    setFormData([...formData, '']);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const promises = formData
        .filter((email) => !!email)
        .map((email) => addInvitation({ email: email }, userData.home_id));
      await Promise.all(promises);
      setLoading(false);
      setOpen(false);
      onModalValidation();
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <Box {...otherProps} margin="30px">
      <Button variant="contained" onClick={handleClickOpen}>
        Inviter de nouveaux participants
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <form onSubmit={onSubmitHandler}>
          <DialogTitle>
            Invites de nouveaux participants
          </DialogTitle>
          <DialogContent>
            <List>
              {formData.map((invite, index) => (
                <ListItem key={index} disablePadding>
                  <TextField
                    name={`invitations[${index}]`}
                    label={`Email ${index + 1}`}
                    value={invite}
                    type="email"
                    onChange={handleInvitationChange(index)}
                    fullWidth
                    sx={{ marginTop: '1rem' }}
                  />
                </ListItem>
              ))}
            </List>
            <IconButton
              variant="contained"
              onClick={onAddInviteClick}
            >
              <AddIcon />
            </IconButton>
            <DialogContentText color="error" sx={{ marginTop: '1rem' }}>
              {error}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>
              Annuler
            </Button>
            <LoadingButton loading={loading} type="submit">
              Envoyer les invitations
            </LoadingButton>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}

ModalInvite.propTypes = {
  onModalValidation: PropTypes.func,
};

ModalInvite.defaultProps = {
  onModalValidation: () => {},
};

export default ModalInvite;
