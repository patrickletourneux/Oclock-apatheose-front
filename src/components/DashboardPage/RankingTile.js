import { Box, Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link as LinkRouter } from 'react-router-dom';

import TileTitle from '../Tile/TileTitle';
import Tile from '../Tile/Tile';
import FirstRankingSecondaryTile from './FirstRankingSecondaryTile';
import UserRankingSecondaryTile from './UserRankingSecondaryTile';

function RankingTile({ data, hasHome }) {
  const isCurrentUserFirst = hasHome && data.firstUser.id === data.currentUser.id;

  const displayWithHome = () => (
    <Tile>
      <TileTitle>Classement</TileTitle>
      <Box
        display="flex"
        // justifyContent="space-evenly"
        flexWrap="wrap"
        gap="1rem"
        marginTop="2rem"
      >
        <FirstRankingSecondaryTile
          data={data.firstUser}
          isCurrentUserFirst={isCurrentUserFirst}
        />
        <UserRankingSecondaryTile
          data={data.currentUser}
          isCurrentUserFirst={isCurrentUserFirst}
          scoreDifference={data.firstUser.score - data.currentUser.score}
        />
      </Box>
      <Box textAlign="center" marginTop="6rem" marginBottom="2rem">
        <Button component={LinkRouter} variant="contained" to="/classement">
          Voir le classement
        </Button>
      </Box>
    </Tile>
  );

  const displayNoHome = () => (
    <Tile>
      <TileTitle>Classement</TileTitle>
      <Typography
        variant="h3"
        color="error"
        textAlign="center"
        marginTop="2rem"
      >
        Vous n'avez pas encore de maison associée, vous n'avez pas de classement
        pour le moment
      </Typography>
    </Tile>
  );

  if (hasHome && data) {
    return displayWithHome();
  }
  return displayNoHome();
}

RankingTile.propTypes = {
  data: PropTypes.shape({
    firstUser: PropTypes.shape({
      id: PropTypes.number.isRequired,
      pseudonym: PropTypes.string.isRequired,
      avatar_img: PropTypes.string,
      score: PropTypes.number.isRequired,
    }).isRequired,
    currentUser: PropTypes.shape({
      id: PropTypes.number.isRequired,
      pseudonym: PropTypes.string.isRequired,
      avatar_img: PropTypes.string,
      score: PropTypes.number.isRequired,
    }).isRequired,
  }),
  hasHome: PropTypes.bool,
};

RankingTile.defaultProps = {
  data: null,
  hasHome: false,
};

export default RankingTile;
