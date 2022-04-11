/* eslint-disable react/prop-types */
import {
  Grid, Avatar,
} from '@mui/material';

function ListItem({
  pseudonym, avatar_img, score, rank,
}) {
  return (
    <Grid
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        typography: 'h3',
        padding: '10px',
      }}
    >
      <Grid>{rank}</Grid>
      <Avatar alt="Remy Sharp" src={avatar_img} sx={{ width: 30, height: 30 }} />
      <Grid>{pseudonym}</Grid>
      <Grid>{score}</Grid>
    </Grid>

  );
}

export default ListItem;
