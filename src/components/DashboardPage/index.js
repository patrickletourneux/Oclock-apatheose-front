import { useContext, useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
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
import Tile from '../Tile/Tile';

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
      <Box
        display="flex"
        flexDirection="row"
        // flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}
      >
        <Box>
          <LeaderboardIcon
            sx={{
              fontSize: '40px',
              color: '#20c2cf',
              marginTop: { xs: '30px', md: '0px' },
            }}
          />
        </Box>
        <Box>
          <PageTitle color="#20c2cf">Tableau de bord</PageTitle>
        </Box>
      </Box>
      <Tile
        width="100vw"
        minHeight="70px"
        sx={{ background: 'linear-gradient(90deg, #F78F8F 40%, #E0547A);' }}
      >
        <Typography color="white" textAlign="center" padding="20px">“Rien de mieux que le bicarbonate de Soude pour tout nettoyer.” ...Walter White <img backgroundColor="white" src="https://img.icons8.com/ios/50/000000/breaking-bad.png" alt="bb" /></Typography>
      </Tile>
      <PageLoader isDisplayed={loading} />
      <PageError error={error} />
      {!loading && (
        <TileContainer>
          <HomeTile data={data} hasHome={!!(hasHome && data)} />
          <TasksTile data={data?.tasks} hasHome={!!(hasHome && data)} />
          <RankingTile data={data?.ranking} hasHome={!!(hasHome && data)} />
        </TileContainer>
      )}
    </PageContainer>
  );
}

export default DashboardPage;
