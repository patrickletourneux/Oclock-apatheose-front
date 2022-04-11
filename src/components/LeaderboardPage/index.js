import {
  Typography, Grid, Box,
} from '@mui/material';

import { useContext, useEffect, useState } from 'react';
import FormDialog from './modalButton';

import authContext from '../../contexts/authContext';
import getRankingPage from '../../apis/api/ranking';
import ListItem from './ListItem';

function LeaderboardPage() {
  const [data, setData] = useState(null);
  const { userData } = useContext(authContext);
  useEffect(() => {
    if (userData) {
      getRankingPage(
        userData.id,
        (newData) => setData(newData),
        (newError) => console.error(newError),
      );
    }
    // Pour le premier rendu, on met vide, ici a chaque chgt de userData
  }, [userData]);

  return (
    <Box
      // sx={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   width: '100vw',
      //   bgcolor: '#f3f7f6',
      //   minHeight: '90vh',
      // }}
    >
      <Box
        sx={{
          bgcolor: 'white',
          border: 1,
          borderColor: '#009688',
          width: '320px',
          margin: '10px auto',
          padding: '10px',
          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        }}
      >
        <Typography
          variant="h1"
          textAlign="center"
          padding="10px"
          margin="0px 0px 30px"
          color="primary"
        >
          Classement & Reward
        </Typography>

        <Typography
          variant="h3"
          textAlign="center"
          padding="10px"
          margin="0px 0px 30px"
          border="1px solid"
          borderRadius={2}
        >
          il vous reste [nb de jours concours] afin de tenter le [titre reward]
        </Typography>

        <Typography
          variant="h2"
          textAlign="center"
          padding="20px"
          color="primary"
        >
          Classement
        </Typography>

        {data?.users?.map((user) => (
          <ListItem key={user.id} {...user} />
        ))}

        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            typography: 'body1',
            padding: '10px',
          }}
        />
      </Box>

      <Box
        sx={{
          bgcolor: 'white',
          border: 1,
          borderColor: '#009688',
          width: '320px',
          margin: '20px auto',
          padding: '10px',
          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          alignContent: 'space-between',
        }}
      >
        <Box>
          <Typography variant="h1" color="primary" textAlign="center">
            Reward
          </Typography>
        </Box>
        <Box sx={{ typography: 'h2' }} textAlign="center" padding="10px" margin="30px 0px">
          [Nom du Reward]
        </Box>
        <Box
          typography="body1"
          color="secondary"
          margin="20px auto"
          textAlign="center"
          maxWidth="600px"
          sx={{ border: '1px solid grey', padding: '20px', borderRadius: 2 }}
        >
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            margin: '40px',
          }}
        >
          <FormDialog />
        </Box>
      </Box>
    </Box>
  );
}

export default LeaderboardPage;
