import { useContext, useState } from 'react';
import {
  Button,
  TextField,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import PropTypes from 'prop-types';

import addHomeTask from '../../apis/api/home_tasks';
import authContext from '../../contexts/authContext';

const getDefaultFormData = () => ({
  name: '',
  value: 10,
});

function ModalCreateTask({ onModalValidation, ...otherProps }) {
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
      await addHomeTask(formData, userData.home_id);
      setLoading(false);
      setOpen(false);
      onModalValidation();
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <Box {...otherProps} margin={3}>
      <Button variant="contained" onClick={handleClickOpen}>
        Créer une tâche
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={onSubmitHandler}>
          <DialogTitle>Créer une tâche</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ marginTop: '1rem' }}>
              Donnez lui un nom
            </DialogContentText>
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
            <DialogContentText sx={{ marginTop: '3rem' }}>
              Attribuez lui un nombre de points
            </DialogContentText>
            <TextField
              name="value"
              label="Points"
              value={formData.value}
              onChange={handleFieldChange}
              fullWidth
              sx={{ marginTop: '1rem' }}
              required
              type="number"
            />
            <DialogContentText color="error" sx={{ marginTop: '1rem' }}>
              {error}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Annuler</Button>
            <LoadingButton loading={loading} type="submit">
              Valider
            </LoadingButton>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}

ModalCreateTask.propTypes = {
  onModalValidation: PropTypes.func,
};

ModalCreateTask.defaultProps = {
  onModalValidation: () => {},
};

export default ModalCreateTask;
