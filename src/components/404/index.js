import { Box, Typography } from '@mui/material';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import oclock from '../../assets/images/oclock.jpg';
import PageContainer from '../PageContainer/PageContainer';
import useKonamiCode from '../KonamiCode/useKonamiCode';
import Sound from '../KonamiCode/Sound';
import noe from '../../assets/images/noe.jpg';

function Page404() {
  const konami = useKonamiCode();
  const tasse = konami ? noe : oclock;

  if (konami) {
    return <Sound />;
  }
  return (
    <PageContainer margin="30px auto">
      <Typography variant="h2" textAlign="center" margin="50px">
        {' '}
        VOUS VENEZ "D'ECHOUER" EN 404 🚢 ?
      </Typography>
      <Typography variant="h2" textAlign="center" margin="50px">
        <CleaningServicesIcon fontSize="70px" /> MAIS LA TEAM "C DU PROPS" NE
        CONNAIT PAS L'ECHEC
      </Typography>
      <Typography variant="h2" textAlign="center" margin="50px">
        <VideogameAssetIcon fontSize="3rem" /> ESSAYEZ "↑ ↑ ↓ ↓ ← → ← →"
      </Typography>
      <Box
        component="img"
        sx={{
          maxHeight: { xs: 300, md: 900 },
          maxWidth: { xs: 300, md: 900 },
          objectFit: 'cover',
          margin: '0px auto',
          display: 'flex',
        }}
        alt="nettoyeur"
        src={tasse}
      />
    </PageContainer>
  );
}

export default Page404;
