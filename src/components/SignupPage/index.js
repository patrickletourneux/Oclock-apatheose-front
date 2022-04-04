import React from "react";
import { useState } from "react";
import { TextField, Typography, Grid, Button, Paper } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import axios from '../../apis/axios'


const SignUp = () => {
const url="";
const [data, setData] = useState({
  email:"",
  pseudo:"",
  password:"",
  confirmPassword:"",
});

// warning, pensez au CORS de Chrome

function Submit(e){
  e.preventDefault();
  axios.post(url,{
    email:data.email,
    pseudo:data.pseudo,
    password:data.password,
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
      <Typography>
        <h1>Inscription</h1>
      </Typography>

{/* donnée dynamique a changer avec l'API DEF */}

      <TextField 
      onChange={(e)=> handle(e)}
      required 
      name="email" 
      label='email'
      value={data.email}
      variant="outlined"
      aria-errormessage="email should be with an @" 
      />

      <TextField 
      required
      onChange={(e)=> handle(e)} 
      value={data.pseudo}
      name="pseudo" 
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

<Checkbox required label="j'accepte les conditions générales"/>

      <Button
        type="valider"
        variant="contained"
    onSubmit={(e)=> Submit(e)
    }
      >
        valider
      </Button>

	  <Button href="#text-buttons" color="secondary" size='small'>Revenir à la page d'accueil</Button>

    </Grid>
	</Box>
  );
}

export default SignUp;
