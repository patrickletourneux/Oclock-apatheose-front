import { useContext, useEffect, useState } from 'react';
import {
  Typography, Grid, Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import authContext from '../../contexts/authContext';
import { getUser } from '../../apis/api/users';
import bgclean from '../../assets/images/bgclean.jpg';
import PageContainer from '../PageContainer/PageContainer';
import DisplayUserInfo from './DisplayUserInfo';
import TileTitle from '../Tile/TileTitle';
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
  const [error, setError] = useState('');

  const getUserInfo = () => {
    if (userData) {
      setError('');
      getUser(
        userData.id,
        (newData) => {
          setData(newData);
        },
        (err) => {
          setError(err);
        },
      );
    }
  };

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  // requete update a faire
  // const submit = (e) => {
  //   e.preventDefault();
  //   UpdateUser(
  //     {
  //       email: data.email,
  //       password: data.password,
  //       pseudonym: data.pseudonym,
  //     },
  //     successSignUp,
  //     errorSignUp,
  //   );
  // };

  return (
    <PageContainer style={styles.paperContainer} sx={{ py: '20px' }}>
      <Tile>
        <TileTitle>Mon espace personnel</TileTitle>
        <Typography textAlign="center" padding="20px" variant="body1">
          Vous pouvez modifier vos données personnelles
        </Typography>
      </Tile>
      <DisplayUserInfo {...data} />
      <Tile>
        <ModalMySpace
          userInfo={data}
          getUserInfo={getUserInfo}
          userId={data?.id}
        />
      </Tile>

      {/* <UserAvatar pseudonym={userData?.pseudonym} /> */}
      <Tile textAlign="center">
        <Grid
          container
          gap={3}
          direction="column"
          alignItems="center"
          variant="outlined"
        >
          <Button type="submit" variant="contained" color="error">
            Supprimer mon compte
          </Button>
        </Grid>

      </Tile>
      <Tile textAlign="center">

        <Link
          to="/tableau-de-bord"
          style={{ textDecoration: 'none', color: '#1ba2ac' }}
        >
          <Button color="secondary" size="small">
            Revenir à mon tableau de bord
          </Button>
        </Link>
      </Tile>
    </PageContainer>
  );
}

export default MySpacePage;
