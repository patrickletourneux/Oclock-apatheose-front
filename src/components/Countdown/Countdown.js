import { Box, Container, Typography } from '@mui/material';
// eslint-disable-next-line import/no-named-as-default
import TimerIcon from '@mui/icons-material/Timer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CountDays from './CountDays';

function Countdown({
  // eslint-disable-next-line react/prop-types
  title,
  // eslint-disable-next-line react/prop-types
  end_at,
}) {
  const nbOfDays = CountDays(new Date(), new Date(end_at));
  return (
    <Container>
      <Typography
        color="white"
        textAlign="center"
        padding="10px"
        fontSize="30px"
        fontWeight="500"
      >
        Plus que Jack Wilson il vous reste{' '}
      </Typography>

      <Box display="flex" flexDirection="row" justifyContent="center">
        <Box>
          <TimerIcon
            sx={{ padding: '20px', color: 'white', fontSize: '45px' }}
          />
        </Box>

        <Typography
          fontSize="45px"
          color="white"
          fontWeight="800"
          padding="10px"
        >
          {nbOfDays} jours
        </Typography>
      </Box>

      <Typography
        fontSize="30px"
        color="white"
        textAlign="center"
        padding="10px"
        fontWeight="500"
      >
        afin de remporter
      </Typography>

      <Box display="flex" flexDirection="row" justifyContent="center">
        <Box>
          <EmojiEventsIcon sx={{ padding: '20px', color: 'white', fontSize: '45px' }} />
        </Box>
        <Typography
          fontSize="45px"
          color="white"
          fontWeight="800"
          padding="10px"
        >
          {title}
        </Typography>
      </Box>
    </Container>
  );
}

export default Countdown;
