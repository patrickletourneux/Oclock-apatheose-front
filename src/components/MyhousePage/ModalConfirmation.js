import {
  Button,
  Dialog, DialogActions, DialogContent, DialogTitle,
} from '@mui/material';
import PropTypes from 'prop-types';
import DialogContentText from '@mui/material/DialogContentText';

function ModalConfirmation({
  open,
  message,
  onConfirm,
  onAbort,
}) {
  const handleClose = () => {
    onAbort();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          Êtes-vous sûr ?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onAbort}>
            Non
          </Button>
          <Button onClick={onConfirm}>
            Oui
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

ModalConfirmation.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onAbort: PropTypes.func.isRequired,
};

export default ModalConfirmation;
