/* eslint-disable react/prop-types */
import {
  Grid, Box, Typography,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
        <Box display="flex" flexDirection="row" justifyContent="center">
          <EmailIcon sx={{ padding: '15px', fontSize: '20px' }} />
          <Typography
            fontSize="20px"
            color="black"
            fontWeight="400"
            padding="10px"
          >
            {email}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <AccountCircleIcon sx={{ padding: '15px', fontSize: '20px' }} />
          <Typography
            fontSize="20px"
            color="black"
            fontWeight="400"
            padding="10px"
          >
            {pseudonym}
          </Typography>
        </Box>

        {/* <p>{pseudonym}</p> */}

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
