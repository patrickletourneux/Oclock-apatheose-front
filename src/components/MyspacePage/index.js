import { useContext, useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import authContext from '../../contexts/authContext';
import { getUser } from '../../apis/api/users';
import bgclean from '../../assets/images/bgclean.jpg';
import PageContainer from '../PageContainer/PageContainer';
import PageTitle from '../PageTitle/PageTitle';
import PageLoader from '../PageLoader/PageLoader';
import PageError from '../PageError/PageError';
import DisplayUserInfo from './DisplayUserInfo';
import TileContainer from '../Tile/TileContainer';
import Tile from '../Tile/Tile';
import ModalMySpace from './ModalMySpace';

const styles = {
  paperContainer: {
    backgroundImage: `url(${bgclean})`,
    backgroundSize: 'cover',
    width: '100vw',
  },
};

function MySpacePage() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);
  const { userData } = useContext(authContext);

  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getUserInfo = () => {
    if (userData) {
      setLoading(true);
      setError('');
      getUser(
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
  };

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);
  return (
    <PageContainer style={styles.paperContainer} sx={{ py: '30px' }}>
      <PageLoader isDisplayed={loading} />
      <PageError error={error} />
      {!loading && data && (
        <TileContainer>
          <Tile textAlign="center" paddingBottom="20px">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              sx={{ flexDirection: { xs: 'column', md: 'row' } }}
            >
              <Box>
                <PersonIcon
                  sx={{
                    fontSize: '40px',
                    marginTop: { xs: '30px', md: '0px' },
                  }}
                />
              </Box>
              <Box>
                <PageTitle>Espace Personnel</PageTitle>
              </Box>
            </Box>
            <DisplayUserInfo {...data} />
            <ModalMySpace userId={data?.id} />
            <Link
              to="/tableau-de-bord"
              style={{
                textDecoration: 'none',
                color: '#1ba2ac',
                textAlign: 'center',
              }}
            >
              <Button color="secondary" size="small" sx={{ padding: '10px' }}>
                Revenir à mon tableau de bord
              </Button>
            </Link>
          </Tile>
        </TileContainer>
      )}
    </PageContainer>
  );
}

export default MySpacePage;
