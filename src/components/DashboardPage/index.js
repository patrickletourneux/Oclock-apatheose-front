import {
  Button,
  Container,
  Typography,
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';

import getDashboardPage from '../../apis/api/dashboard';
import authContext from '../../contexts/authContext';
import TileContainer from '../Tile/TileContainer';
import Tile from '../Tile/Tile';
import PageTitle from '../PageTitle/PageTitle';
import PageLoader from '../PageLoader/PageLoader';
import PageError from '../PageError/PageError';
import TileTitle from '../Tile/TileTitle';

function DashboardPage() {
  const { userData } = useContext(authContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // TODO home_id et user_id ???
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
      <PageTitle>Tableau de Bord</PageTitle>
      <PageLoader isDisplayed={loading} />
      <PageError error={error} />
      {!loading && data && (
        <TileContainer>
          <Tile>
            <TileTitle>{data.home.name}</TileTitle>
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
          </Tile>
        </TileContainer>
      )}
    </Container>
  );
}

export default DashboardPage;
