import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import iphone from '../../assets/images/iphone.jpg';
import oclock from '../../assets/images/oclock.jpg';
import useKonamiCode from '../KonamiCode/useKonamiCode';
// import upup from '../../assets/sounds'

function HeroContainer() {
  const konami = useKonamiCode();
  const tasse = konami ? oclock : iphone;
  // const 1up = new Audio (upup)

  const styles = {
    paperContainer: {
      width: '100vw',
      minHeight: '60vh',
      backgroundImage: `url(${tasse})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  };
  return (
    <Container style={styles.paperContainer}>
      <Typography
        position="absolute"
        padding="30px"
        variant="h1"
        sx={{ margin: 'auto' }}
        textAlign="center"
      >
        LE MENAGE N'ATTEND PAS
      </Typography>
      <Box marginTop={80} marginBottom={10} marginRight={10} textAlign="right">
        <Link
          to="/inscription"
          style={{ textDecoration: 'none', color: '#1ba2ac' }}
        >
          <Button
            color="primary"
            variant="contained"
            size="large"
          >
            Inscrivez vous!
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default HeroContainer;
