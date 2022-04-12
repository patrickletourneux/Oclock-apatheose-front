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
    // <Grid
    //   sx={{
    //     display: 'flex',
    //     justifyContent: 'space-between',
    //     typography: 'h3',
    //     padding: '10px',
    //   }}
    // >
    //   <Grid>{rank}</Grid>
    //   <Avatar alt="{users.pseudonym}" src={avatar_img} sx={{ width: 30, height: 30 }} />
    //   <Grid>{pseudonym}</Grid>
    //   <Grid>{score}</Grid>
    // </Grid>
    <List sx={{ width: '100%', maxWidth: 350, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-end">
        <ListItemText primary={rank} />
        <ListItemAvatar>
          <Avatar alt="{users.pseudonym}" src={avatar_img} size="small" />
        </ListItemAvatar>
        <ListItemText
          sx={{ width: '200px' }}
          primary={pseudonym}
        />
        <ListItemText
          sx={{ width: '30px' }}
          color="orange"
          primary={score}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}

export default ListItems;
