import { useState } from 'react';
import {
  TextField,
  Typography,
  Grid,
  Button,
  Box,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';
import { addUser } from '../../apis/api/users';
import bgclean from '../../assets/images/bgclean.jpg';
import PageContainer from '../PageContainer/PageContainer';

const styles = {
  paperContainer: {
    backgroundImage: `url(${bgclean})`,
    backgroundSize: 'cover',
    width: '100vw',
  },
};

function MySpacePage() {
  // quid de gerer un state par champs?
  const [data, setData] = useState({
    email: '',
    pseudonym: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  function successSignUp() {
    navigate('/connexion');
    // realiser modale if avec affichage "resError"
  }

  function errorSignUp(resError) {
    console.log(resError);
  }

  // MANAGE PSEUDO ERROR
  const [errorPseudonym, setErrorPseudonym] = useState('');

  const validatePseudonym = () => {
    const longueur = data.pseudonym.length;

    if (longueur <= 10) {
      setErrorPseudonym('');
    } else {
      setErrorPseudonym('Axel attend toujours sa tasse @Etienne svp !');
    }
  };

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

  // CONST CONFIRMPASSWORD ERROR

  function handleFieldChange(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  }

  const submit = (e) => {
    e.preventDefault();
    addUser(
      {
        email: data.email,
        password: data.password,
        pseudonym: data.pseudonym,
      },
      successSignUp,
      errorSignUp,
    );
  };

  return (
    <PageContainer style={styles.paperContainer} sx={{ py: '20px' }}>
      <Box
        component="form"
        onSubmit={submit}
        sx={{
          bgcolor: 'white',
          border: 1,
          width: '340px',
          borderColor: '#009688',
          margin: 'auto',
          padding: '10px',
          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        }}
      >
        <Grid
          container
          gap={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
          variant="outlined"
        >
          <Typography textAlign="center" padding= '20px' variant="h1">
            Mon espace personnel
          </Typography>

          <Typography textAlign="center" padding="20px" variant="body1">
            Vous pouvez modifier vos données personnelles
          </Typography>

          <TextField
            error={!!emailError}
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
            error={!!errorPseudonym}
            required
            onChange={(e) => handleFieldChange(e)}
            value={data.pseudonym}
            name="pseudonym"
            label="Pseudo"
            variant="outlined"
            helperText={errorPseudonym}
            onBlur={validatePseudonym}
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

          <Button type="submit" variant="contained">
            valider
          </Button>

          <Button
            fullwidth
            type="submit"
            variant="contained"
            color="error"
          >
            Supprimer mon compte
          </Button>

          <Link to="/tableau-de-bord" style={{ textDecoration: 'none', color: '#1ba2ac' }}>
            <Button color="secondary" size="small">
              Revenir à mon tableau de bord
            </Button>
          </Link>
        </Grid>
      </Box>
    </PageContainer>
  );
}

export default MySpacePage;
