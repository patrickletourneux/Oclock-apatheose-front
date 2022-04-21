import { Box, Container, Typography } from '@mui/material';
import up from '../../assets/sounds/upup.mp3';
import bebop from '../../assets/sounds/bebop.mp3';
import oclock from '../../assets/images/oclock.jpg';
import noe from '../../assets/images/noe.jpg';

function Sound() {
  const audio = new Audio(bebop);
  audio.loop = true;

  return (
    // creation d'un player a activer apres success
    <Container>
      <Typography
        fontFamily="Square Peg"
        fontSize="75px"
        textAlign="center"
        padding={5}
      >
        "Vous êtes dorénavant des developpeurs <br />
        sur le chemin de la balise parfaite <br />
        La Montagne est maintenant derriere vous"
      </Typography>
      <Box
        component="img"
        padding={5}
        position="relative"
        margin="0px auto"
        sx={{
          maxHeight: { xs: 300, md: 900 },
          maxWidth: { xs: 300, md: 900 },
          objectFit: 'cover',
          margin: '0px auto',
          display: 'flex',
        }}
        alt="tasse"
        src={noe}
        onMouseOver={() => {
          audio.loop = true;
          audio.play();
        }}
        onMouseOut={() => {
          audio.loop = false;
          // audio.stop();
        }}
      />
      <Typography
        fontFamily="Square Peg"
        fontSize="75px"
        textAlign="center"
        padding={5}
      >
        Affectueusement, Noé
      </Typography>
    </Container>
  );
}

export default Sound;
