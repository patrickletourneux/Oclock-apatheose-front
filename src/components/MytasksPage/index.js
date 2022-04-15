import { useContext, useEffect, useState } from 'react';
import authContext from '../../contexts/authContext';
import PageContainer from '../PageContainer/PageContainer';
import PageTitle from '../PageTitle/PageTitle';
import PageLoader from '../PageLoader/PageLoader';
import PageError from '../PageError/PageError';
import TileContainer from '../Tile/TileContainer';
import getMytasksPage from '../../apis/api/mytasks';

function MytasksPage() {
  const { userData } = useContext(authContext);
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const hasHome = !!(userData && (userData?.home_id || userData?.home_id === 0));

  useEffect(() => {
    if (hasHome) {
      setLoading(true);
      setError('');
      getMytasksPage(userData.id)
        .then(setData)
        .catch(setError)
        .finally(() => setLoading(false));
    } else if (!hasHome && userData) {
      setLoading(false);
    }
  }, [userData, hasHome]);

  return (
    <PageContainer>
      <PageTitle>Mes Tâches</PageTitle>
      <PageLoader isDisplayed={loading} />
      <PageError error={error} />
      {!loading && (
        <TileContainer>
          tile
        </TileContainer>
      )}
    </PageContainer>
  );
}

export default MytasksPage;
