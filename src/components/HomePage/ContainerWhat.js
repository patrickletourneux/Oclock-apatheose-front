import {
  Button, Container, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import fer from '../../assets/images/fer.jpg';

function ContainerWhat() {
  const styles = {
    paperContainer: {
      width: '100vw',
      backgroundImage: `url(${fer})`,
      backgroundSize: 'cover',
      height: '65vh',
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
        C POUR QUOI?
      </Typography>
      <Link
        to="/inscription"
        style={{ textDecoration: 'none', color: '#1ba2ac' }}
      >
        <Button
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

export default ContainerWhat;
