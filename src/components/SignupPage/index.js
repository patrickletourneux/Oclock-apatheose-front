import React from "react";
import { useState } from "react";
import { TextField, Typography, Grid, Button, FormGroup, FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import axios from '../../apis/axios'

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;


const SignUp = () => {
const [data, setData] = useState({
  email:"",
  pseudonym:"",
  password:"",
  confirmPassword:"",
});


function Submit(e){
  e.preventDefault();
  axios.post(url,{
    email:data.email,
    pseudonym:data.pseudonym,
    password:data.password,
    // check en front à réaliser
    confirmPassword:data.confirmPassword
  }).then(res=>{
    console.log(res.data);
  })
}

function handle(e){
const newData={...data}
newData[e.target.name]=e.target.value
setData(newData)
console.log(newData);
};



  return (
<Box 
component="form"
sx={{ border: 2, width:'400px', borderColor:'primary' } }>


    <Grid
      container
      gap={3}
      direction="column"
      justifyContent="center"
      alignItems="center"
	  variant='outlined'
    >
      <Typography variant="h1">Inscription</Typography>

{/* donnée dynamique a changer avec l'API DEF */}

      <TextField 
      onChange={(e)=> handle(e)}
      required 
      name="email" 
      label='email'
      value={data.email}
      variant="outlined"
      />

      <TextField 
      required
      onChange={(e)=> handle(e)} 
      value={data.pseudonym}
      name="pseudonym" 
      label="Pseudo" 
      variant="outlined" />

      <TextField 
      required
      onChange={(e)=> handle(e)}
      value={data.password}
      name="password"
      type='password' 
      label="Mot de passe" 
      variant="outlined" />

      <TextField
      required
        onChange={(e)=> handle(e)}
        value={data.confirmPassword}
        name="confirmPassword"
        label="Confirmation Mot de passe"
        variant="outlined"
      />

<FormGroup>
<FormControlLabel required control={<Checkbox />} label="j'accepte les conditions générales" />
</FormGroup>

      <Button
        type="valider"
        variant="contained"
    onSubmit={(e)=> Submit(e)}
      >
      valider
      </Button>

	  <Button href="/" color="secondary" size='small'>Revenir à la page d'accueil</Button>

    </Grid>
	</Box>
  );
}

export default SignUp;
