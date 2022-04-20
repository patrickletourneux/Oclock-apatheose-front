import { useContext, useEffect, useState } from 'react';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { Box } from '@mui/material';
import authContext from '../../contexts/authContext';
import getRankingPage from '../../apis/api/ranking';
import ListItem from './ListItem';
import Countdown from '../Countdown/Countdown';
import RewardTile from './RewardTile';
import PageTitle from '../PageTitle/PageTitle';
import PageLoader from '../PageLoader/PageLoader';
import PageError from '../PageError/PageError';
import TileContainer from '../Tile/TileContainer';
import Tile from '../Tile/Tile';
import TileTitle from '../Tile/TileTitle';
import PageContainer from '../PageContainer/PageContainer';
import ModalReward from './ModalReward';

function LeaderboardPage() {
  const [data, setData] = useState(null);
  const { userData } = useContext(authContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getRankingInfo = () => {
    if (userData) {
      setLoading(true);
      setError('');
      getRankingPage(
        userData.home_id,
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
  };

  useEffect(() => {
    getRankingInfo();
    // tant que la variable userData n'est pas modifié le useEffect ne senclenche
    //  pas et la fonction n'est pas executee
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

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
          <PageTitle color="#20c2cf">Classement & Reward</PageTitle>
        </Box>
      </Box>
      <PageLoader isDisplayed={loading} />
      <PageError error={error} />
      {!loading && (
        <>
          <Tile
            width="100vw"
            minHeight="200px"
            sx={{ background: 'linear-gradient(90deg, #F78F8F 40%, #E0547A);' }}
          >
            <Countdown {...data?.reward} />
          </Tile>
          <TileContainer>
            <Tile>
              <TileTitle>Reward</TileTitle>
              {data?.users?.map((user) => (
                <ListItem key={user.id} {...user} />
              ))}
            </Tile>
            <Tile>
              <TileTitle>Reward</TileTitle>
              <RewardTile {...data?.reward} />
              <ModalReward
                getRankingInfo={getRankingInfo}
                rewardId={data?.reward.id}
              />
            </Tile>
          </TileContainer>
        </>
      )}
    </PageContainer>
  );
}

export default LeaderboardPage;
