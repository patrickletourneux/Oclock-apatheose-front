import { Box, Typography } from '@mui/material';
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
    <PageContainer
      margin="30px auto"
    >
      <Typography
        variant="h2"
        textAlign="center"
        margin="50px"

      > PENDANT CE TEMPS LA...
      </Typography>
      <Typography
        variant="h1"
        textAlign="center"
        margin="50px"
      >🥳 EN APOTHEOSE  🚢
      </Typography>
      <Box
        component="img"
        sx={{
          maxHeight: { xs: 300, md: 900 },
          maxWidth: { xs: 300, md: 900 },
          objectFit: 'cover',
          margin: '0px auto',
          display:'flex',
        }}
        alt="nettoyeur"
        src={tasse}
      />
      <Typography
        variant="h3"
        textAlign="center"
        margin="50px"

      > PS: @Axel n'en a toujours pas...😈
      </Typography>
    </PageContainer>
  );
}

export default Page404;
