import {
  Grid, TextField,
} from '@mui/material';
import Tile from '../Tile/Tile';

function DisplayUserInfo({
  pseudonym,
  email,
  // password,
}) {
  return (
    <Tile>
      <Grid
        container
        gap={4}
        direction="column"
        alignItems="center"
      >
        <p>{email}</p>
        <p>{pseudonym}</p>

        {/* <TextField
          disabled
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }} /> */}

        {/* TODO Mettre en place ListAvatar au besoin */}
        {/* <Box
      textAlign="center"

    >
      <Typography variant="h3" padding="10px">Votre avatar</Typography>
      <Avatar
        alt="{users.pseudonym}"
        src={avatar_img}
        sx={{ margin: 'auto', width: 80, height: 80 }}
      />
    </Box> */}
      </Grid>
    </Tile>

  );
}

// DisplayUserInfo.propTypes = {
//   pseudonym: PropTypes.string.isRequired,
//   avatar_img: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
// };

export default DisplayUserInfo;
