/* eslint-disable no-console */
// import * as React from 'react';
import { useState, useContext } from 'react';

import {
  TextField,
  Typography,
  Grid,
  Button,
  Box,
} from '@mui/material';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import { Link } from 'react-router-dom';
import signin from '../../apis/api/signin';
import bgclean from '../../assets/images/bgclean.jpg';
import authContext from '../../contexts/authContext';

const styles = {
  paperContainer: {
    backgroundImage:
      `url(${bgclean})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    position: 'fixed',
  },
};

export default function Login() {
  const { login } = useContext(authContext);

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  function onSigninSuccess(resData) {
    login(resData);
  }

  function onSigninError(resErrorMessage) {
    console.log(resErrorMessage);
  }
  function handleFieldChange(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  const submit = (e) => {
    e.preventDefault();
    signin(
      {
        email: data.email,
        password: data.password,
      },
      onSigninSuccess,
      onSigninError,

    );
  };

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
        onSubmit={submit}
        sx={{
          bgcolor: 'white',
          border: 2,
          width: '340px',
          borderColor: '#009688',
          margin: 'auto ',
          padding: '10px',
          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        }}
      >
        <Grid
          container
          gap={3}
          direction="column"
          justifyContent="center"
          alignItems="center"
          variant="outlined"
        >
          <Typography sx={{ padding: '20px' }} variant="h1">
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
            required
            autoComplete="false"
            onChange={(e) => handleFieldChange(e)}
            name="email"
            type="email"
            label="email"
            value={data.email}
            variant="outlined"
          />
          <TextField
            required
            autoComplete="false"
            onChange={(e) => handleFieldChange(e)}
            name="password"
            type="password"
            label="Mot de passe"
            value={data.password}
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            endIcon={<DoneOutlineOutlinedIcon />}
          >
            Valider
          </Button>
          <Link
            to="/"
            style={{ textDecoration: 'none', color: '#1ba2ac' }}
          >
            <Button color="secondary" size="small">
              Revenir à la page d'accueil
            </Button>
          </Link>

        </Grid>
      </Box>
    </Box>
  );
}
