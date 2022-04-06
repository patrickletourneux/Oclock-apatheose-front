import React from "react";
import { useState } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  form,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import {addUser} from "../../apis/api/users";
import { Link } from "react-router-dom";

const MAX_LENGTH = 5;

const SignUp = () => {
  console.log('signup');
  // quid de gerer un state par champs?
  const [data, setData] = useState({
    email: "",
    pseudonym: "",
    password: "",
    confirmPassword: "",
  });

  const [errorPseudonym, setErrorPseudonym] = useState("");

  // useEffect(() => {
  //   // Set errorMessage only if text is equal or bigger than MAX_LENGTH
  //   if (data.length >= MAX_LENGTH) {
  //     setErrorMessage(
  //       "The input has exceeded the maximum number of characters"
  //     );
  //   }
  // }, [data]);

  function createUser(resData) {
console.log(resData);
  };
  
  function createUserError(resError) {
    console.log(resError);
      };

  function Submit(e) {
    e.preventDefault();
  console.log('SubmitForm');
    addUser({
    email: data.email,
    password: data.password,
    pseudonym: data.pseudonym}, createUser, createUserError)
  }

  function blurPseudonym(e){
// Verifier si le champs respecte les conditons de validite et si non afficher l'erreur realisé
const longueur = data.pseudonym.length;

if (longueur <= 5)
{setErrorPseudonym("")}
else{
  setErrorPseudonym('Vous avez un champs mal fait idiot !')

}}

  function handle(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    console.log(newData);
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
            onChange={(e) => handle(e)}
            autoComplete='false'
            required
            name="email"
            label="email"
            value={data.email}
            variant="outlined"
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
            onBlur={blurPseudonym}
          />

          <TextField
            required
            autoComplete='false'
            onChange={(e) => handle(e)}
            value={data.password}
            name="password"
            type="password"
            label="Mot de passe"
            variant="outlined"
          />

          <TextField
            required
            autoComplete='false'
            onChange={(e) => handle(e)}
            value={data.confirmPassword}
            type="password"
            name="confirmPassword"
            label="Confirmation Mot de passe"
            variant="outlined"
      // check en front à réaliser password ===confirmPassword
          />

          <FormGroup>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="j'accepte les conditions générales"
            />
          </FormGroup>

          <Button
            type="submit"
            variant="contained"
          >
            valider
          </Button>
          <Link to="/">
          <Button color="secondary" size="small">
            Revenir à la page d'accueil
          </Button>
          </Link>
        </Grid>
    </Box>
  );
};

export default SignUp;
