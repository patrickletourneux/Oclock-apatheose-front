import { Typography } from '@mui/material';
// eslint-disable-next-line import/no-named-as-default
import CountDays from './CountDays';

function Countdown({
  title,
}) {
  const nbOfDays = CountDays(new Date('2022,03,15'), new Date('2022,03,19'));
  console.log(nbOfDays);

  return (
    <Typography
      variant="h3"
      textAlign="center"
      padding="10px"
      margin="0px 0px 30px"
      border="1px solid"
      borderRadius={2}
    >
      Vous avez encore {nbOfDays} jours afin de remporter le <Typography variant="h3" color="secondary">{ title }</Typography>
    </Typography>
  );
}

export default Countdown;
