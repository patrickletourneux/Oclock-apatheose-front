/* eslint-disable react/prop-types */
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import UserAvatar from '../UserAvatar/UserAvatar';

function ListItems({
  pseudonym, score, rank,
}) {
  return (
    <>
      <List
        sx={{
          width: '100%',
          maxWidth: 600,
          bgcolor: 'background.paper',
        }}
      >
        {/* Utiliser ListAvatar */}
        <ListItem>
          <ListItemText primary={rank} variant="body1" />
          <ListItemAvatar>
            <UserAvatar pseudonym={pseudonym} />
          </ListItemAvatar>
          <ListItemText sx={{ width: '150px' }} primary={pseudonym} />
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
