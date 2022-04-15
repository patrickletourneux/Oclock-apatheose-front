import {
  Avatar, Box, Grid, TextField, Typography,
} from '@mui/material';
import Tile from '../Tile/Tile';

function DisplayUserInfo({
  pseudonym,
  avatar_img,
  email,
  password,
}) {
  return (
    <Tile>
      <Grid
        container
        gap={4}
        direction="column"
        alignItems="center"
      >
        <TextField
          id="standard"
          label="Votre email"
          name="email"
          value={email}
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          name=""
          label="votre pseudo"
          value={pseudonym}
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />

        {/* listAvatar */}
        <Box
          textAlign="center"

        >
          <Typography variant="h3" padding="10px">Votre avatar</Typography>
          <Avatar
            alt="{users.pseudonym}"
            src={avatar_img}
            sx={{ margin: 'auto', width: 80, height: 80 }}
          />
          {/* <UserAvatar src={users.avatar_img} pseudonym={users.pseudonym}/> */}
        </Box>
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
