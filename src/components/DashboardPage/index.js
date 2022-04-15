import { useContext, useEffect, useState } from 'react';

import getDashboardPage from '../../apis/api/dashboard';
import authContext from '../../contexts/authContext';
import TileContainer from '../Tile/TileContainer';
import PageTitle from '../PageTitle/PageTitle';
import PageLoader from '../PageLoader/PageLoader';
import PageError from '../PageError/PageError';
import HomeTile from './HomeTile';
import TasksTile from './TasksTile';
import RankingTile from './RankingTile';
import PageContainer from '../PageContainer/PageContainer';

function DashboardPage() {
  const { userData } = useContext(authContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const hasHome = !!(userData && (userData?.home_id || userData?.home_id === 0));

  useEffect(() => {
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
    } else if (!hasHome && userData) {
      setLoading(false);
    }
  }, [userData, hasHome]);

  return (
    <PageContainer>
      <PageTitle>Tableau de Bord</PageTitle>
      <PageLoader isDisplayed={loading} />
      <PageError error={error} />
      {!loading && (
        <TileContainer>
          <HomeTile data={data} hasHome={hasHome && data} />
          <TasksTile data={data?.tasks} hasHome={hasHome && data} />
          <RankingTile data={data?.ranking} hasHome={hasHome && data} />
        </TileContainer>
      )}
    </PageContainer>
  );
}

export default DashboardPage;
