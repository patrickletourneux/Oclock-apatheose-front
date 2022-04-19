import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import fer from '../../assets/images/fer.jpg';
import gamin from '../../assets/images/gamin.jpg';
import darkswiper from '../../assets/images/darkswiper.jpg';

function ContainerWhat() {
  const styles = {
    paperContainer: {
      maxwidth: 1440,
      // backgroundImage: `url(${fer})`,
    },
  };

  return (
    <Container
      style={styles.paperContainer}
      sx={{ background: 'linear-gradient(90deg, #21C2CF, #49D7BB)' }}
    >
      <Box textAlign="center">
        <Typography padding="30px" variant="h1">
          POURQUOI UTILISER "C DU PROP'S"?
        </Typography>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        flexDirection="row"
        margin={2}
        sx={{
          justifyContent: 'space-around',
        }}

      >
        <Card
          sx={{
            width: { xs: '350px', md: '500px' },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={fer}
              alt="fer"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              >
                INSCRIPTION FACILE EN 1 CLIC
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                Plus rapide et facile que la mise en place de Redux,
                l'inscription se gère grace à un formulaire simplifiée
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            width: { xs: '350px', md: '500px' },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={gamin}
              alt="enfant qui joue"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              >
                INVITEZ ET JOUER AVEC QUI VOUS VOULEZ
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                Faites participer Papy aux tâches ménagères en lui envoyant
                simplement un mail d'invitation. Verifier au préalable qu'il en
                ait une quand même...
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            width: { xs: '350px', md: '500px' },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={darkswiper}
              alt="balai noir"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                CHOISISSEZ LA RECOMPENSE DU VAINQUEUR !
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Massages, Restaurants gastronomiques, choix du Film pendant la
                semaine, on laisse votre imagination décider...
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>

      <Box
        margin="30px"
        textAlign="center"
      >
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

export default ContainerWhat;
