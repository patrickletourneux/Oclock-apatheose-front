import React from "react";
import { useState } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormGroup,
  FormControlLabel,
  Container,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import { addUser } from "../../apis/api/users";
import { Link } from "react-router-dom";
import validator from "validator";
import bgclean from "../../assets/images/bgclean.jpg"

const styles = {
  paperContainer: {
    backgroundImage: 
    `url(${bgclean})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width:"100%"
  }
  };

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
<>
<Box
	style={styles.paperContainer}
  sx={{width:"100%",
  padding:"40px"}}
>
    
    <Box
      component="form"
      onSubmit={Submit}
      sx={{ 
        bgcolor:'white', 
        border: 2, 
        width: "500px", 
        borderColor: "#009688", 
        margin: "auto ", 
        padding:"30px",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
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
        <Typography sx={{ padding: "50px"}} variant="h1">Inscription</Typography>

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
    </Box>
    </>
  );
};

export default SignUp;
