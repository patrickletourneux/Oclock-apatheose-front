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
import couple from '../../assets/images/couple.jpg';
import vacance from '../../assets/images/vacance.jpg';
import colloc from '../../assets/images/colloc.jpg';
import family from '../../assets/images/family.jpg';
import ordi from '../../assets/images/ordi.jpg';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import kk from "../../assets/images/kk.jpg"

function ContainerWho() {
  return (
    <Container
      style={{ position: 'relative', overflow: 'hidden', padding: '50px' }}
    >
      <img
        src={ordi}
        alt="couple"
        style={{
          position: 'absolute',
          zIndex: '-1',
          objectFit: 'cover',
          width: '100vw',
          height: '100%',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          filter: 'blur(1px)',
          opacity: 0.5,
        }}
      />
      <Box textAlign="center">
        <Typography paddingBottom="50px" paddingTop="20px" variant="h1">
          QUI PEUT JOUER ?
        </Typography>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={3}
        flexDirection="row"
        marginBottom="50px"
        marginTop="20px"
        sx={{ justifyContent: 'space-evenly' }}
      >
        <Card
          sx={{
            maxWidth: 370,
            minHeight: 400,
          }}
        >
          <CardActionArea>
            <CardMedia component="img" height="200" image={couple} alt="fer" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                COUPLE
              </Typography>
              <Typography variant="body2" color="text.secondary"><HeartBrokenIcon />
Parlez en à Johnny Depp , avec C DU PROP'S , il ne serait pas au tribunal aujourd'hui 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 370, minHeight: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={kk}
              alt="famille heureuse"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                FAMILLE
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Vous vous demandez comment Kim fait pour avoir 
                une cuisine nickel avec 3 enfants ?<br /><br /><br />...
                Elle utilise "C DU PROPS"
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
                COLOCATION
              </Typography>
              <Typography variant="body2" color="text.secondary">
On a tous connu un Kevin couché sur le canapé, a se servir dans le frigo, pendant que vous nettoyiez les traces de la soirée d'hier pour récupérer la caution...<br/><br/>Avec C DU PROP'S , Kevin il va se lever....
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
              On a tous connu un Kevin couché dans le hamac, a se servir dans le frigo, pendant que vous nettoyiez les traces de la soirée d'hier pour récupérer la caution...<br/><br/>Avec C DU PROP'S , Kevin il va se lever....
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <Box margin="40px" textAlign="center">
        <Link
          to="/inscription"
          style={{ textDecoration: 'none', color: '#1ba2ac' }}
        >
          <Button
            color="primary"
            variant="contained"
            size="large"
            sx={{ marginTop: '30px' }}
          >
            Inscrivez vous!
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default ContainerWho;
