// import * as React from 'react';
import {
  Avatar,
  TextField,
  FormGroup,
  ButtonGroup,
  Button,
  Typography,
  Link,
  Box,
} from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

export default function Login() {
  // const [value, setValue] = React.useState('');

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <Box
      sx={{
        width: 450,
        height: 700,
        p: 4,
        border: '1px solid grey',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <Avatar
      ><AccountCircleOutlinedIcon />
      </Avatar
      >
      <h2>Se connecter</h2>
      <Typography
        variant="body">
        Vous n'avez pas encore de compte?
        <Link href="#"> Inscrivez-vous!</Link>
      </Typography>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        // value={value}
        onChange={() => console.log('email')}
      />
      <TextField
        label="Password"
        fullWidth
        margin="normal"
        // value={value}
        onChange={() => console.log('password')}
      />
      <FormGroup>
        <Typography
          variant="body"
          id="typo"
        >
          Mot de passe oublié?
          <Link href="#">
            Réinitialiser
          </Link>
        </Typography>
      </FormGroup>
      <ButtonGroup>
        <Button
          sx={{
            border: 1,
          }}
          variant="outlined"
          href="#"
          size="small"
          color="secondary"
          id="login__button-validate"
          endIcon={<ClearOutlinedIcon />}
        >
          Annuler
        </Button>
        <Button
          sx={{
            border: 1,
          }}
          variant="outlined"
          href="#"
          size="small"
          color="secondary"
          id="login__button-validate"
          endIcon={<DoneOutlineOutlinedIcon />}
        >
          Valider
        </Button>
      </ButtonGroup>
    </Box>
  );
}
