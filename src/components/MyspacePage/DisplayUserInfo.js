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
}) {
  return (
    <List
      sx={{
	    width: '100%',
	    maxWidth: 600,
	    bgcolor: 'background.paper',
	  }}
    >
      <ListItem>
        <ListItemText primary={email} variant="body1" />
      </ListItem>

      <ListItemAvatar>
        <Avatar alt="{users.pseudonym}" src={avatar_img} size="small" />
      </ListItemAvatar>

      <ListItem>
        <ListItemText sx={{ width: '150px' }} primary={pseudonym} />
      </ListItem>

      <ListItem>
        {/* <ListItemText
          sx={{ width: '30px', color: 'orange' }}
          primary={password}
        /> */}
      </ListItem>
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
