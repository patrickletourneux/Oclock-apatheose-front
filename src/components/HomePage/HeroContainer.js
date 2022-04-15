import {
  Button, Container, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import phone5 from '../../assets/images/phone5.jpg';

function HeroContainer() {
  const styles = {
    paperContainer: {
      width: '100vw',
      backgroundImage: `url(${phone5})`,
      backgroundSize: 'cover',
      objectFit: 'cover',
      height: '65vh',
    },
  };
  return (
    <Container style={styles.paperContainer}>
      <Typography position="absolute" padding="30px" variant="h1" sx={{ margin: 'auto' }} textAlign="center">
        LE MENAGE N'ATTEND PAS
      </Typography>
      <Link
        to="/inscription"
        style={{ textDecoration: 'none', color: '#1ba2ac' }}
      >
        <Button
          position="relative"
          color="primary"
          variant="contained"
          size="large"
          sx={{ marginTop: '55vh', marginLeft: '40vw' }}
        >
          Inscrivez vous!
        </Button>
      </Link>
    </Container>
  );
}

export default HeroContainer;
