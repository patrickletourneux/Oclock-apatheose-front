import { Typography } from '@mui/material';
// eslint-disable-next-line import/no-named-as-default
import CountDays from './CountDays';

function Countdown({
  // eslint-disable-next-line react/prop-types
  title,
  // eslint-disable-next-line react/prop-types
  end_at,
}) {
  const nbOfDays = CountDays(new Date(), new Date(end_at));
  return (
    <Typography
      variant="h3"
      textAlign="center"
      padding="10px"
      margin="0px 0px 30px"
      border="1px solid"
      borderRadius={2}
    >
      Vous avez encore{' '}
      <Typography variant="body1" color="secondary">
        {nbOfDays} jours
      </Typography>{' '}
      afin de remporter{' '}
      <Typography variant="body1" color="secondary">
        {title}
      </Typography>
    </Typography>
  );
}

export default Countdown;
