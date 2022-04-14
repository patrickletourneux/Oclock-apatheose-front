import { useContext, useEffect, useState } from 'react';
import {
  Typography, Grid, Button, Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import authContext from '../../contexts/authContext';
import { getUser } from '../../apis/api/users';
import bgclean from '../../assets/images/bgclean.jpg';
import PageContainer from '../PageContainer/PageContainer';
import DisplayUserInfo from './DisplayUserInfo';

const styles = {
  paperContainer: {
    backgroundImage: `url(${bgclean})`,
    backgroundSize: 'cover',
    width: '100vw',
  },
};

function MySpacePage() {
  const [data, setData] = useState(null);
  const { userData } = useContext(authContext);

  const [error, setError] = useState('');

  useEffect(() => {
    if (userData) {
      setError('');
      getUser(
        userData.home_id,
        (newData) => {
          setData(newData);
        },
        (err) => {
          setError(err);
        },
      );
    }
  }, [userData]);

  // const submit = (e) => {
  //   e.preventDefault();
  //   UpdateUser(
  //     {
  //       email: data.email,
  //       password: data.password,
  //       pseudonym: data.pseudonym,
  //       avatar_img: data.avatar_img,
  //     },
  //     successSignUp,
  //     errorSignUp,
  //   );
  // };

  return (
    <PageContainer style={styles.paperContainer} sx={{ py: '20px' }}>
      <Box
        sx={{
          bgcolor: 'white',
          border: 1,
          width: '340px',
          borderColor: '#009688',
          margin: 'auto',
          padding: '10px',
          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        }}
      >
        <Grid
          container
          gap={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
          variant="outlined"
        >
          <Typography textAlign="center" padding="20px" variant="h1">
            Mon espace personnel
          </Typography>

          <Typography textAlign="center" padding="20px" variant="body1">
            Vous pouvez modifier vos données personnelles
          </Typography>

          <DisplayUserInfo {...userData} />

          {/* <Button type="submit" variant="contained">
            valider
          </Button> */}

          {/* <Button type="submit" variant="contained" color="error">
            Supprimer mon compte
          </Button> */}

          <Link
            to="/tableau-de-bord"
            style={{ textDecoration: 'none', color: '#1ba2ac' }}
          >
            <Button color="secondary" size="small">
              Revenir à mon tableau de bord
            </Button>
          </Link>
        </Grid>
      </Box>
    </PageContainer>
  );
}

export default MySpacePage;
