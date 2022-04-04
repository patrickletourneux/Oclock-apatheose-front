import React from "react";
import { useRef, useState, useEffect } from "react";
import { TextField, Typography, Grid, Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";

function SignUp() {
  return (
<Box sx={{ border: 2, width:'400px', borderColor:'primary' } }>

    <Grid
      container
      gap={3}
      direction="column"
      justifyContent="center"
      alignItems="center"
	  variant='outlined'
    >
      <Typography>
        <h1>Inscription</h1>
      </Typography>

      <TextField name="email" label="Email" variant="outlined" />

      <TextField name="pseudo" label="Pseudo" variant="outlined" />

      <TextField name="Mot de passe" label="Mot de passe" variant="outlined" />

      <TextField
        name="Confirmation Mot de passe"
        label="Confirmation Mot de passe"
        variant="outlined"
      />

<Checkbox required label="j'accepte les conditions générales"/>

      <Button
        type="valider"
        variant="contained"
        onClick={() => {
          alert("ca appuie fort!");
        }}
      >
        valider
      </Button>

	  <Button href="#text-buttons" color="secondary" size='small'>Revenir à la page d'accueil</Button>

    </Grid>
	</Box>
  );
}

export default SignUp;
