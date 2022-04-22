/* eslint-disable max-len */
import { Box, Typography } from '@mui/material';
import PageContainer from '../PageContainer/PageContainer';
import PageTitle from '../PageTitle/PageTitle';
import Tile from '../Tile/Tile';
import TileContainer from '../Tile/TileContainer';

function legals() {
  return (
    <PageContainer>
      <PageTitle padding={1}>Mentions légales</PageTitle>
      <TileContainer marginBottom={10}>
        <Tile>
          <Box margin={2}>
            <Typography variant="h3">Informations légales –  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">www.cduprops.fr</a></Typography>
          </Box>
          <Box margin={2}>
            <Typography variant="h3">Siege Social </Typography>
          </Box>
          <Box margin={2}>
            <Typography variant="body1">GG SAS</Typography>
            <Typography variant="body1"> 69 Rue de la soif</Typography>
            <Typography variant="body1">666 LICHTENSTEIN</Typography>
          </Box>
          <Box margin={2}>
            <Typography variant="h3">E-mail: <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=etienne@oclock.com" target="_blank" rel="noreferrer">sav@cduprops.fr</a></Typography>
          </Box>
          <Box margin={2}>
            <Typography variant="h3">Téléphone: <a href="tel:+33970408879">+33 (0)970 408 879</a></Typography>
          </Box>
          <Box margin={2}>
            <Typography variant="body1"><p>Numéro d’immatriculation au registre de commerce lichtensteinien : B 189 786</p></Typography>
          </Box>
          <Box margin={2}>
            <Typography variant="body1"><p>Numéro d’identification à la TVA: LU32384563</p></Typography>
          </Box>
          <Box margin={2}>
            <Typography variant="h3"><p>Site réalisé par : de la Bienveillance et de l'amour</p></Typography>
          </Box>
          <Box margin={2}>
            <Typography variant="body1">Responsable de publication : Elon Musk <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=etienne@oclock.com" target="_blank" rel="noreferrer">boss@cduprops.fr</a> </Typography>
          </Box>
          <Box margin={2}>
            <Typography variant="h3">Hebergeur: </Typography>
            <Typography variant="body1">"Chez Patrick EURL"</Typography>
            <Typography variant="body1">Amazing Cloud</Typography>
          </Box>

        </Tile>
      </TileContainer>
    </PageContainer>
  );
}

export default legals;
