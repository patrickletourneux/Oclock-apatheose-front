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
import { updateReward } from '../../apis/api/reward';

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

// eslint-disable-next-line react/prop-types
export default function ModalReward({ rewardId, getRankingInfo }) {
  const [open, setOpen] = React.useState(false);

  const [data, setData] = React.useState({
    title: '',
    description: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function successUpdateReward(resSuccess) {
    getRankingInfo();
    console.log(resSuccess);
  }

  function errorUpdateReward(resError) {
    console.log(resError);
  }

  function handleFieldChange(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  }

  const submit = (e) => {
    e.preventDefault();
    updateReward(
      rewardId,
      {
        title: data.title,
        description: data.description,
      },
      successUpdateReward,
      errorUpdateReward,
    );
    handleClose();
  };

  return (
    <Box textAlign="center" margin="25px">
      <Button margin="5px" type="Submit" variant="outlined" onClick={handleClickOpen}>
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
          <Box component="form" onSubmit={submit}>
            <TextField
              autoFocus
              onChange={(e) => handleFieldChange(e)}
              name="title"
              value={data.title}
              margin="normal"
              id="name"
              label="Titre de Reward"
              fullWidth
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              margin="normal"
              name="description"
              label="Description"
              onChange={(e) => handleFieldChange(e)}
              value={data.description}
              multiline
              rows={6}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={submit}>Enregistrer</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
