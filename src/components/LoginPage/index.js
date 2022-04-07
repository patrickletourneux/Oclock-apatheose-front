/* eslint-disable no-console */
// import * as React from 'react';
import { useState } from 'react';

import {
  TextField,
  Typography,
  Grid,
  Button,
  Box,
} from '@mui/material';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { Link } from 'react-router-dom';
import validator from 'validator';
import signin from '../../apis/api/signin';
import bgclean from '../../assets/images/bgclean.jpg';

const styles = {
  paperContainer: {
    backgroundImage:
      `url(${bgclean})`,
    backgroundSize: 'cover',
    width: '100%',
  },
};

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  function loginFormUser(resDataUser) {
    console.log(resDataUser);
  }
  // MANAGE EMAIL ERROR
  const [emailError, setEmailError] = useState('');
  const validateEmail = (e) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('Fais un effort svp :) ');
    }
  };
  function handleFieldChange(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function Submit(e) {
    e.preventDefault();
    signin(
      {
        email: data.email,
        password: data.password,
      },
      loginFormUser,
    );
  }

  return (
    <Box
      style={styles.paperContainer}
      sx={{
        py: '40px',
        height: '85vh',
      }}
    >
      <Box
        component="form"
        onSubmit={Submit}
        sx={{
          bgcolor: 'white',
          border: 2,
          width: '400px',
          borderColor: '#009688',
          margin: 'auto ',
          padding: '30px',
          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        }}
      >
        <Grid
          container
          gap={4}
          direction="column"
          justifyContent="center"
          alignItems="center"
          variant="outlined"
        >
          <Typography sx={{ padding: '50px' }} variant="h1">
            Connexion
          </Typography>
          <Typography
            variant="body1"
          >
            Vous n'avez pas encore de compte ?&nbsp;
            <Link
              to="/inscription"
              style={{ textDecoration: 'none', color: '#1ba2ac' }}
            >Inscrivez-vous
            </Link>
          </Typography>
          <TextField
            error={emailError}
            onChange={(e) => handleFieldChange(e)}
            autoComplete="false"
            required
            name="email"
            label="email"
            value={data.email}
            variant="outlined"
            helperText={emailError}
            onBlur={validateEmail}
          />
          <TextField
            required
            autoComplete="false"
            onChange={(e) => handleFieldChange(e)}
            value={data.password}
            name="password"
            type="password"
            label="Mot de passe"
            variant="outlined"
          />
          <Link
            to="/"
            style={{ textDecoration: 'none' }}
          >
            <Button
              type="submit"
              variant="contained"
              endIcon={<ClearOutlinedIcon />}
            >
              Annuler
            </Button>
          </Link>
          <Button
            type="submit"
            variant="contained"
            endIcon={<DoneOutlineOutlinedIcon />}
          >
            Valider
          </Button>
        </Grid>
      </Box>
    </Box>
  );
}
