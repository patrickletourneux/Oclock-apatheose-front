import { useEffect, useState } from 'react';
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormGroup,
  FormControlLabel,
  Box,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';
import { addUser } from '../../apis/api/users';
import bgclean from '../../assets/images/bgclean.jpg';
import PageContainer from '../PageContainer/PageContainer';
import PageError from '../PageError/PageError';

const styles = {
  paperContainer: {
    backgroundImage: `url(${bgclean})`,
    backgroundSize: 'cover',
    width: '100vw',
  },
};

function SignUp() {
  // quid de gerer un state par champs?
  const [data, setData] = useState({
    email: '',
    pseudonym: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function successSignUp() {
    navigate('/connexion');
    // realiser modale if avec affichage "resError"
  }

  function errorSignUp(resErrorMessage) {
    setError(resErrorMessage);
  }

  // MANAGE PSEUDO ERROR
  const [errorPseudonym, setErrorPseudonym] = useState('');

  const validatePseudonym = () => {
    const { length } = data.pseudonym;

    if (length > 10) {
      setErrorPseudonym('Maximum 10 caractères');
    } else {
      setErrorPseudonym('');
    }
  };

  // MANAGE EMAIL ERROR

  const [emailError, setEmailError] = useState('');
  const validateEmail = () => {
    if (data.email !== '' && !validator.isEmail(data.email)) {
      setEmailError('Format d\'email invalide');
    } else {
      setEmailError('');
    }
  };

  // CONST CONFIRMPASSWORD ERROR
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const validateConfirmPassword = () => {
    if (data.confirmPassword !== '' && data.password !== '' && data.confirmPassword !== data.password) {
      setConfirmPasswordError('Le mot de passe et sa confirmation doivent être identiques');
    } else {
      setConfirmPasswordError('');
    }
  };

  useEffect(() => {
    if (emailError) {
      validateEmail();
    }
    if (errorPseudonym) {
      validatePseudonym();
    }
    if (confirmPasswordError) {
      validateConfirmPassword();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  function handleFieldChange(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  }

  const submit = (e) => {
    e.preventDefault();
    if (emailError || errorPseudonym || confirmPasswordError) {
      return;
    }
    setError('');
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
      <PageError error={error} />
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
          <Typography sx={{ padding: '50px' }} variant="h1">
            Inscription
          </Typography>

          <Typography variant="body1">
            Vous avez déjà un compte ?&nbsp;
            <Link
              to="/connexion"
              style={{ textDecoration: 'none', color: '#1ba2ac' }}
            >
              Connectez-vous
            </Link>
          </Typography>

          <TextField
            // sx={{ width: '100%', padding: '0 1rem' }}
            fullWidth
            required
            error={!!emailError}
            onChange={(e) => handleFieldChange(e)}
            autoComplete="false"
            name="email"
            label="email"
            value={data.email}
            variant="outlined"
            helperText={emailError}
            onBlur={validateEmail}
          />

          <TextField
            fullWidth
            required
            error={!!errorPseudonym}
            onChange={(e) => handleFieldChange(e)}
            value={data.pseudonym}
            name="pseudonym"
            label="Pseudo"
            variant="outlined"
            helperText={errorPseudonym}
            onBlur={validatePseudonym}
          />

          <TextField
            fullWidth
            required
            error={!!confirmPasswordError}
            autoComplete="false"
            onChange={(e) => handleFieldChange(e)}
            value={data.password}
            name="password"
            type="password"
            label="Mot de passe"
            variant="outlined"
            helperText={confirmPasswordError}
            onBlur={validateConfirmPassword}
          />

          <TextField
            fullWidth
            required
            error={!!confirmPasswordError}
            autoComplete="false"
            onChange={(e) => handleFieldChange(e)}
            value={data.confirmPassword}
            type="password"
            name="confirmPassword"
            label="Confirmation Mot de passe"
            variant="outlined"
            helperText={confirmPasswordError}
            onBlur={validateConfirmPassword}
          />

          <FormGroup>
            <FormControlLabel
              control={<Checkbox required />}
              label={(
                <Typography variant="body1" color="grey">
                  j'accepte les conditions générales
                </Typography>
              )}
            />
          </FormGroup>

          <Button type="submit" variant="contained" disabled={!!emailError || !!errorPseudonym || !!confirmPasswordError}>
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

export default SignUp;
