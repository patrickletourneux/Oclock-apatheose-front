import { useContext, useState } from 'react';
import {
  Button, TextField, Box,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import PropTypes from 'prop-types';

import authContext from '../../contexts/authContext';
import { updateHome } from '../../apis/api/homes';

const getDefaultFormData = () => ({
  name: '',
});

function ModalModifyHomeName({ onModalValidation, ...otherProps }) {
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

  const handleFieldChange = (e) => {
    const newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await updateHome(formData, userData.home_id, userData.id);
      setLoading(false);
      setOpen(false);
      onModalValidation();
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <Box {...otherProps}>
      <Button variant="contained" onClick={handleClickOpen}>
        Modifier le nom
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <form onSubmit={onSubmitHandler}>
          <DialogTitle>
            Modifier le nom de la maison
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              name="name"
              label="Nom"
              value={formData.name}
              onChange={handleFieldChange}
              fullWidth
              sx={{ marginTop: '1rem' }}
              required
            />
            <DialogContentText color="error" sx={{ marginTop: '1rem' }}>
              {error}
            </DialogContentText>
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
    </Box>
  );
}

ModalModifyHomeName.propTypes = {
  onModalValidation: PropTypes.func,
};

ModalModifyHomeName.defaultProps = {
  onModalValidation: () => {},
};

export default ModalModifyHomeName;
