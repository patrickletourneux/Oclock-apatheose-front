import { Image } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import nettoyeur from '../../assets/images/nettoyeur.jpg';
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

      >404 WORK IN PROGRESS
      </Typography>

      <Box
        component="img"
        sx={{
          height: 800,
          width: 800,
          maxHeight: { xs: 400, md: 900 },
          maxWidth: { xs: 400, md: 900 },
        }}
        alt="nettoyeur"
        src={nettoyeur}
      />
    </PageContainer>
  );
}

export default Page404;
