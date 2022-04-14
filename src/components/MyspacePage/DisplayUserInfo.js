import { Avatar, Grid, TextField } from '@mui/material';
import Tile from '../Tile/Tile';
import UserAvatar from '../UserAvatar/UserAvatar';

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
        alignItems="center"
        variant="outlined"
      >
        <TextField
          autoComplete="false"
          name="email"
          value={email}
          variant="outlined"
        />

        <TextField
          autoComplete="false"
          name=""
          label=""
          value={pseudonym}
          variant="outlined"
        />

        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          variant="outlined"
        />

        {/* listAvatar */}
        <Avatar alt="{users.pseudonym}" src={avatar_img} size="small" />
        {/* <UserAvatar src={users.avatar_img} pseudonym={users.pseudonym}/> */}
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
