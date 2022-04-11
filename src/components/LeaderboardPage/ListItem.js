/* eslint-disable react/prop-types */
import {
  Grid, Avatar,
} from '@mui/material';



// const users: [
//     {
//       id: 1,
//       pseudonym: 'Axel',
//       avatar_img:
//         'https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg',
//       // score from 0 to ++
//       score: 512,
//       // rank from 1 to ++
//       rank: 2,
//     },

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
