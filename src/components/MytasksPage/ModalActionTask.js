import {
  Button,
  Dialog, DialogActions, DialogContent, DialogTitle,
} from '@mui/material';
import PropTypes from 'prop-types';
import DialogContentText from '@mui/material/DialogContentText';

function ModalActionTask({
  task,
  onTaskDelete,
  onTaskDone,
  onAbort,
}) {
  const handleClose = () => {
    onAbort();
  };

  return (
    <div>
      <Dialog
        open={!!task}
        onClose={handleClose}
      >
        <DialogTitle>
          {task?.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Que souhaitez-vous ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onTaskDone}>
            J'ai fait la tâche
          </Button>
          <Button onClick={onTaskDelete}>
            Je me désattribue la tâche
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

ModalActionTask.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string,
  }),
  onTaskDelete: PropTypes.func.isRequired,
  onTaskDone: PropTypes.func.isRequired,
  onAbort: PropTypes.func.isRequired,
};

ModalActionTask.defaultProps = {
  task: null,
};

export default ModalActionTask;
