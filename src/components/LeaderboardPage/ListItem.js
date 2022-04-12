/* eslint-disable react/prop-types */
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function ListItems({
  pseudonym, avatar_img, score, rank,
}) {
  return (
    <>
      <List sx={{ width: '100%', maxWidth: 350, bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemText primary={rank} variant="body1" />
          <ListItemAvatar>
            <Avatar alt="{users.pseudonym}" src={avatar_img} size="small" />
          </ListItemAvatar>
          <ListItemText
            sx={{ width: '150px' }}
            primary={pseudonym}
          />
          <ListItemText
            sx={{ width: '30px', color: 'orange' }}
            primary={score}
          />
        </ListItem>
      </List>
      <Divider variant="fullwidth" />
    </>
  );
}

export default ListItems;
