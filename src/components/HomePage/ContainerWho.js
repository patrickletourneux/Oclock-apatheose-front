import {
  Box,
  Button, Card, CardActionArea, CardContent, CardMedia, Container, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import couple from '../../assets/images/couple.jpg';
import vacance from '../../assets/images/vacance.jpg';
import colloc from '../../assets/images/colloc.jpg';
import family from '../../assets/images/family.jpg';

function ContainerWho() {
  const styles = {
    paperContainer: {
      // width: '100vw',
      backgroundImage: `url(${couple})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  };
  return (
    <Container style={styles.paperContainer}>
      <>
        <Box textAlign="center">
          <Typography
            padding="60px"
            variant="h1"
          >
            C POUR QUI?
          </Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" gap={3} flexDirection="row" margin={10} sx={{ justifyContent: 'space-evenly' }}>
          <Card sx={{ maxWidth: 370, minHeight: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={couple}
                alt="fer"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  COUPLE
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Plus rapide et facile que la mise en place
                  de Redux, l'inscription se gère grace à un formulaire simplifiée
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 370, minHeight: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={family}
                alt="famille heureuse"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  FAMILLE
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Faites participer Papy aux tâches ménagères
                  en lui envoyant simplement un mail d'invitation.
                  Verifier au préalable qu'il en ait une quand même...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 370, minHeight: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={colloc}
                alt="colloc heureuse"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  COLLOCATION
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Massages, Restaurants gastronomiques,
                  choix du Film pendant la semaine, on laisse votre imagination décider...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 370, minHeight: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={vacance}
                alt="vacances heureuses"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  VACANCES
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Massages, Restaurants gastronomiques,
                  choix du Film pendant la semaine, on laisse votre imagination décider...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
        <Box margin="30px" textAlign="center">
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
      </>
    </Container>
  );
}

export default ContainerWho;
