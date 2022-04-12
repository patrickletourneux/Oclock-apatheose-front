import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';

import getDashboardPage from '../../apis/api/dashboard';
import authContext from '../../contexts/authContext';

function DashboardPage() {
  const { userData } = useContext(authContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (userData?.home_id) {
      setLoading(true);
      setError('');
      getDashboardPage(
        userData.id,
        (newData) => {
          setData(newData);
          setLoading(false);
        },
        (err) => {
          setError(err);
          setLoading(false);
        },
      );
    }
  }, [userData]);

  return (
    <Container>
      <Typography variant="h1" textAlign="center" margin="1rem 0">
        Tableau de Bord
      </Typography>
      {loading && <Typography textAlign="center"><CircularProgress /></Typography>}
      {error && <Typography textAlign="center" color="error">{error}</Typography>}
      {!loading && data && (
        <Grid container justifyContent="space-evenly">
          <Grid
            item
            xs={12}
            md={10}
            xl={4}
            sx={{
              bgcolor: 'white',
              boxShadow: '0 1px 3px black',
              padding: '1rem',
            }}
          >
            <Typography variant="h2" textAlign="center">
              {data.home.name}
            </Typography>
            <Typography textAlign="right">
              {`Il y a ${data?.home.userCount} inscrit${data?.home.userCount > 1 ? 's' : ''}`}
            </Typography>
            <Button
              component={LinkRouter}
              variant="contained"
              to="/ma-maison"
            >
              Paramétrer
            </Button>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default DashboardPage;
