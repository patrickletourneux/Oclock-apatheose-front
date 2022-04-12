import {
  Container,
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';

import getDashboardPage from '../../apis/api/dashboard';
import authContext from '../../contexts/authContext';
import TileContainer from '../Tile/TileContainer';
import PageTitle from '../PageTitle/PageTitle';
import PageLoader from '../PageLoader/PageLoader';
import PageError from '../PageError/PageError';
import HomeTile from './HomeTile';

function DashboardPage() {
  const { userData } = useContext(authContext);
  // TODO is null ok as initial value ?
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const hasHome = !!(userData && (userData?.home_id || userData?.home_id === 0));

  useEffect(() => {
    // TODO home_id et user_id ???
    if (hasHome) {
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
    } else {
      setLoading(false);
    }
  }, [userData, hasHome]);

  return (
    <Container>
      <PageTitle>Tableau de Bord</PageTitle>
      <PageLoader isDisplayed={loading} />
      <PageError error={error} />
      {!loading && (
        <TileContainer>
          <HomeTile data={data} hasHome={hasHome} />
        </TileContainer>
      )}
    </Container>
  );
}

export default DashboardPage;
