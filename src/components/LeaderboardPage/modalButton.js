import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

export default function ModalButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="Submit" variant="outlined" onClick={handleClickOpen}>
        Modifier
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle textAlign="center">Modifier le Reward</DialogTitle>
        <DialogContent>
          <DialogContentText textAlign="center" margin="20px">
            Vous pouvez modifier la récompense avec les champs suivants:
          </DialogContentText>
          <TextField
            autoFocus
            margin="normal"
            id="name"
            label="Titre de Reward"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-static"
            margin="normal"
            label="Description"
            multiline
            rows={6}
            fullWidth
            defaultValue="Description de la récompense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleClose}>Enregistrer</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
