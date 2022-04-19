import {
  Box, Container, Typography,
} from '@mui/material';
import up from '../../assets/sounds/upup.mp3';
import oclock from '../../assets/images/oclock.jpg';

function Sound() {
  const audio = new Audio(up);
  audio.loop = true;

  return (
    <Container>
      <Typography variant="h1" textAlign="center" padding={5}>La Montagne est derriere vous</Typography>
      <Box
        component="img"
        padding={5}
        alignItems="center"
        position="relative"
        sx={{
          maxHeight: { xs: 300, md: 400 },
          maxWidth: { xs: 300, md: 400 },
          textAlign: 'center',
          justifyContent: 'center',
        }}
        alt="tasse"
        src={oclock}
        onMouseOver={() => {
          audio.loop = true;
          audio.play();
        }}
        onMouseOut={() => {
          audio.loop = false;
          // audio.stop();
        }}
      />
    </Container>

  );
}

export default Sound;
