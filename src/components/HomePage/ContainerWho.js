import {
  Button, Container, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import couple from '../../assets/images/couple.jpg';

function ContainerWho() {
  const styles = {
    paperContainer: {
      width: '100vw',
      backgroundImage: `url(${couple})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  };
  return (
    <Container style={styles.paperContainer}>
      <>
        <Typography
          position="absolute"
          padding="30px"
          variant="h1"
          sx={{ margin: 'auto' }}
          textAlign="center"
        >
          C POUR QUI?
        </Typography>
        <Link
          to="/inscription"
          style={{ textDecoration: 'none', color: '#1ba2ac' }}
        >
          <Button
            position="absolute"
            color="primary"
            variant="contained"
            size="large"
            sx={{ marginTop: '55vh', marginLeft: '40vw' }}
          >
            Inscrivez vous!
          </Button>
        </Link>
      </>
    </Container>
  );
}

export default ContainerWho;
