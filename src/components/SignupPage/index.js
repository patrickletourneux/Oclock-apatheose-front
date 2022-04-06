import React from "react";
import { useState } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import { addUser } from "../../apis/api/users";
import { Link } from "react-router-dom";
import validator from "validator";

const SignUp = () => {
  // quid de gerer un state par champs?
  const [data, setData] = useState({
    email: "",
    pseudonym: "",
    password: "",
    confirmPassword: "",
  });

  function createUser(resData) {
    console.log(resData);
  }

  function createUserError(resError) {
    console.log(resError);
  }

  // MANAGE PSEUDO ERROR
  const [errorPseudonym, setErrorPseudonym] = useState("");

  const validatePseudonym = (e) => {
    const longueur = data.pseudonym.length;

    if (longueur <= 5) {
      setErrorPseudonym("");
    } else {
      setErrorPseudonym("Vous avez un champs mal fait idiot !");
    }
  };

  // MANAGE EMAIL ERROR

  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Fais un effort svp :) ");
    }
  };

  // CONST CONFIRMPASSWORD ERROR
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const validateConfirmPassword = (e) => {
    var pwd = e.target.value;

    if (pwd != data.password) {
      setConfirmPasswordError("Il faut le mêêême");
    } else {
      setConfirmPasswordError("");
    }
  };

  function handle(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  function Submit(e) {
    e.preventDefault();
    addUser(
      {
        email: data.email,
        password: data.password,
        pseudonym: data.pseudonym,
      },
      createUser,
      createUserError
    );
  }

  return (
    <Box
      component="form"
      onSubmit={Submit}
      sx={{ border: 2, width: "400px", borderColor: "primary" }}
    >
      <Grid
        container
        gap={3}
        direction="column"
        justifyContent="center"
        alignItems="center"
        variant="outlined"
      >
        <Typography variant="h1">Inscription</Typography>

        <TextField
          error={emailError}
          onChange={(e) => handle(e)}
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
          error={errorPseudonym}
          required
          onChange={handle}
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
          onChange={(e) => handle(e)}
          value={data.password}
          name="password"
          type="password"
          label="Mot de passe"
          variant="outlined"
        />

        <TextField
          required
          error={confirmPasswordError}
          autoComplete="false"
          onChange={(e) => handle(e)}
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
            required
            control={<Checkbox />}
            label="j'accepte les conditions générales"
          />
        </FormGroup>

        <Button type="submit" variant="contained">
          valider
        </Button>
        <Link to="/connexion">
          <Button color="secondary" size="small">
            Revenir à la page d'accueil
          </Button>
        </Link>
      </Grid>
    </Box>
  );
};

export default SignUp;
