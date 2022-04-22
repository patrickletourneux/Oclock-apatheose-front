import { useState } from 'react';
import {
  TextField,
  Typography,
  Grid,
  Button,
  Box,
  TextareaAutosize,
} from '@mui/material';
import { Link } from 'react-router-dom';
import validator from 'validator';
import PageContainer from '../PageContainer/PageContainer';

function Contact() {
  // quid de gerer un state par champs?
  const [data, setData] = useState({
    email: '',
    pseudonym: '',
  });

  // MANAGE PSEUDO ERROR
  const [errorPseudonym, setErrorPseudonym] = useState('');

  const validatePseudonym = () => {
    const longueur = data.pseudonym.length;

    if (longueur <= 10) {
      setErrorPseudonym('');
    } else {
      setErrorPseudonym('MaJ "à VeraCruz" - Gauthier: 2 tasses / Axel: 0');
    }
  };

  // MANAGE EMAIL ERROR

  const [emailError, setEmailError] = useState('');
  const validateEmail = (e) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('«@», signe indispensable et désormais universel, est une clef qui ouvre toutes les portes. Placé entre un nom et un «gmail.com», il nous permet de communiquer avec nimporte qui pourvu que nous ayons la bonne adresse.');
    }
  };

  function handleFieldChange(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  }

  const submit = (e) => {
    e.preventDefault();
    // addUser(
    //   {
    //     email: data.email,
    //     password: data.password,

    //   },
    //   successSignUp,
    //   errorSignUp,
    // );
  };

  return (
    <PageContainer sx={{ py: '20px' }}>
      <Box
        component="form"
        onSubmit={submit}
        sx={{
          bgcolor: 'white',
          border: 1,
          width: '340px',
          borderColor: '#009688',
          margin: '30px auto',
          padding: '20px',
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
          <Typography sx={{ padding: '20px' }} variant="h1">
            Contact
          </Typography>

          <Typography variant="body1">
            Si vous avez la moindre question
          </Typography>

          <TextField
            error={!!emailError}
            onChange={(e) => handleFieldChange(e)}
            autoComplete="false"
            required
            name="email"
            label="Votre email"
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
            label="Votre pseudo"
            variant="outlined"
            helperText={errorPseudonym}
            onBlur={validatePseudonym}
          />

          <TextareaAutosize
            aria-label="votre message"
            minRows={6}
            placeholder="Votre message"
            style={{ width: 220 }}
          />

          <Button type="submit" variant="contained">
            valider
          </Button>

          <Link to="/" style={{ textDecoration: 'none', color: '#1ba2ac' }}>
            <Button color="secondary" size="small">
              Revenir à la page d'accueil
            </Button>
          </Link>
        </Grid>
      </Box>
    </PageContainer>
  );
}

export default Contact;
