import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

function DisplayUserInfo({
  pseudonym,
  avatar_img,
  email,
  password,
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
        <ListItemText
          sx={{ width: '30px', color: 'orange' }}
          primary={password}
        />
      </ListItem>
    </List>
  );
}

export default DisplayUserInfo;
