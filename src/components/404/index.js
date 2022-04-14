import { Image } from '@mui/icons-material';
import { Typography } from '@mui/material';
import React from 'react';
import nettoyeur from '../../assets/images/nettoyeur.jpg';
import PageContainer from '../PageContainer/PageContainer';

function Page404() {
  const styles = {
    paperContainer: {
		  backgroundImage: `url(${nettoyeur})`,
		  backgroundColor: 'white',
      // backgroundSize: '80%',
      backgroundPosition: 'center',
      width: '100vw',
      margin: -24,
      padding: 24,
    },

	  };
  return (
    <>
      <Typography>404 WORK IN PROGRESS</Typography>

      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="nettoyeur"
        src={nettoyeur}
      />
      <PageContainer style={styles.paperContainer} />
    </>
  );
}

export default Page404;
