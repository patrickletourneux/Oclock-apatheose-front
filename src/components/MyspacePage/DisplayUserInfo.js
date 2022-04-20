/* eslint-disable react/prop-types */
import { Grid, Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import UserAvatar from '../UserAvatar/UserAvatar';

function DisplayUserInfo({ pseudonym, email }) {
  return (
    <Grid container gap={2} direction="column" alignItems="center">
      <Box display="flex" flexDirection="row" justifyContent="center">
        <EmailIcon sx={{ padding: '10px', fontSize: '30px' }} />
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
        <UserAvatar
          pseudonym={pseudonym}
          sx={{
            mr: '10px',
            fontSize: '20px',
            color: 'white',
            bgcolor: 'black',
          }}
        />
        <Typography
          fontSize="20px"
          color="black"
          fontWeight="400"
          padding="10px"
        >
          {pseudonym}
        </Typography>
      </Box>
    </Grid>
  );
}

// DisplayUserInfo.propTypes = {
//   pseudonym: PropTypes.string.isRequired,
//   avatar_img: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
// };

export default DisplayUserInfo;
