import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';

function DisplayUserInfo({
  pseudonym,
  avatar_img,
  email,
  password,
}) {
  return (
    <List
      sx={{
	    width: '50%',
	    maxWidth: 600,
        margin: 'auto',
	  }}
    >
      <ListItemText primary={email} variant="body1" />

      <ListItemText
        sx={{ width: '150px' }}
        primary={pseudonym}
      />

      <ListItemText
        sx={{ width: '30px', color: 'orange' }}
        primary={password}
      />
      {/* listAvatar */}
      <Avatar
        alt="{users.pseudonym}"
        src={avatar_img}
        size="small"
      />

    </List>
  );
}

// DisplayUserInfo.propTypes = {
//   pseudonym: PropTypes.string.isRequired,
//   avatar_img: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
// };

export default DisplayUserInfo;
