import React from "react";
import { useState, useEffect } from "react";
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
import {addUser} from "../../apis/api/users";

const MAX_LENGTH = 5;

const SignUp = () => {
  const [data, setData] = useState({
    email: "",
    pseudonym: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  //   // Set errorMessage only if text is equal or bigger than MAX_LENGTH
  //   if (data.length >= MAX_LENGTH) {
  //     setErrorMessage(
  //       "The input has exceeded the maximum number of characters"
  //     );
  //   }
  // }, [data]);

  function Submit(e) {
    e.preventDefault();
    axios.post('http://54.37.154.200:10000/api/v1/', { addUser } )
    .then(res=>{
      console.log(res.data);
    })
  }

  function handle(e) {
    // const test = (event) => {
    //   if (event.target.value >= MAX_LENGTH) {
    //     setErrorMessage(
    //       "The input has exceeded the maximum number of characters"
    //     );
    //   } else {
    //     setErrorText("invalid format");
    //   }
    // };

    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <Box
      component="form"
      sx={{ border: 2, width: "400px", borderColor: "primary" }}
    >
      <form onSubmit={(e) => Submit(e)}>
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
            required
            name="email"
            label="email"
            value={data.email}
            variant="outlined"
            helperText={errorMessage}
          />

          <TextField
            required
            onChange={(e) => handle(e)}
            value={data.pseudonym}
            name="pseudonym"
            label="Pseudo"
            variant="outlined"
          />

          <TextField
            required
            onChange={(e) => handle(e)}
            value={data.password}
            name="password"
            type="password"
            label="Mot de passe"
            variant="outlined"
          />

          <TextField
            required
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
            type="valider"
            variant="contained"
            // onSubmit={(e)=> Submit(e)}
          >
            valider
          </Button>

          <Button href="/" color="secondary" size="small">
            Revenir à la page d'accueil
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default SignUp;
