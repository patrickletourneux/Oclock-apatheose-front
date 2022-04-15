import { Box, Typography } from '@mui/material';
import oclock from '../../assets/images/oclock.jpg';
import PageContainer from '../PageContainer/PageContainer';

function Page404() {
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
          height: 550,
          width: 800,
          maxHeight: { xs: 400, md: 900 },
          maxWidth: { xs: 400, md: 900 },
        }}
        alt="nettoyeur"
        src={oclock}
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
