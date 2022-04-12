import { Typography } from '@mui/material';

// reward: {
//     id: 5,
//     title: 'Massage Californien',
//     description: 'Un massage californien',
//     // pour recuperer la date: new Date(end_at)
//     end_at: '2022-04-08 15:09:14.538557+02',
//   },
// };

function Countdown({
  title
}) {
  return (
    <Typography
      variant="h3"
      textAlign="center"
      padding="10px"
      margin="0px 0px 30px"
      border="1px solid"
      borderRadius={2}
    >
      il vous reste [nb de jours concours] afin de tenter le { title }
    </Typography>
  );
}

export default Countdown;
