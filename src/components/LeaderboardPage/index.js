import { useContext, useEffect, useState } from 'react';
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
  }, [userData]);

  return (
    <PageContainer>
      <PageTitle>Classement & Reward</PageTitle>
      <PageLoader isDisplayed={loading} />
      <PageError error={error} />
      {!loading && (
        <TileContainer>
          <Tile>
            <Countdown {...data?.reward} />
            {data?.users?.map((user) => (
              <ListItem key={user.id} {...user} />
            ))}
          </Tile>
          <Tile>
            <TileTitle>Reward</TileTitle>
            <RewardTile {...data?.reward} />
            <ModalReward getRankingInfo={getRankingInfo} rewardId={data?.reward.id} />
          </Tile>
        </TileContainer>
      )}
    </PageContainer>
  );
}

export default LeaderboardPage;
