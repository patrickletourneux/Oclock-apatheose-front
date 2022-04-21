/* eslint-disable react/prop-types */
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Typography } from '@mui/material';
import UserAvatar from '../UserAvatar/UserAvatar';

function ListItems({ pseudonym, score, rank }) {
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
          <Typography fontWeight="600">#</Typography>
          <ListItemText primary={rank} variant="body1" />
          <ListItemAvatar>
            <UserAvatar
              sx={{
                textAlign: 'center',
                width: '25px',
                height: '25px',
                marginLeft: '5px',
              }}
              pseudonym={pseudonym}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{
              width: '150px',
              textAlign: 'center',
            }}
            primary={pseudonym}
          />
          <ListItemText
            sx={{
              width: '50px',
              color: 'orange',
              textAlign: 'right',
            }}
            primary={score}
          />
          <Typography sx={{ marginLeft: '5px' }}>points</Typography>
        </ListItem>
      </List>
      <Divider variant="fullwidth" />
    </>
  );
}

export default ListItems;
