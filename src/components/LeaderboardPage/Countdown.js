import { Typography } from '@mui/material';


function Countdown({
  title, end_at,
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
      Vous avez jusqu'au {end_at} afin de remporter le <Typography variant="h2" color="blue">{ title }</Typography>
    </Typography>
  );
}

export default Countdown;
