import Avatar from '@mui/material/Avatar';
import { Grid, TextField } from '@mui/material';
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
        gap={3}
        direction="column"
        justifyContent="center"
        alignItems="center"
        variant="outlined"
      >
        <TextField
          autoComplete="false"
          required
          name="email"
          value={email}
          variant="outlined"
        />

        <TextField
          autoComplete="false"
          required
          name=""
          label=""
          value={pseudonym}
          variant="outlined"
        />

        <TextField
          autoComplete="false"
          required
          name=""
          label=""
          value={password}
          variant="outlined"
        />

        {/* listAvatar */}
        <Avatar
          alt="{users.pseudonym}"
          src={avatar_img}
          size="small"
        />
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
