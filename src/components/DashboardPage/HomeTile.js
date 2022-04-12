import { Box, Button, Typography } from '@mui/material';
import { Link as LinkRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import TileTitle from '../Tile/TileTitle';
import Tile from '../Tile/Tile';

function HomeTile({ data, hasHome }) {
  const addHomeClick = () => {
    console.log('add home');
  };

  const joinHomeClick = () => {
    console.log('join home');
  };

  const displayWithHome = () => (
    <>
      <TileTitle>{data.home.name}</TileTitle>
      <Typography textAlign="right">
        {`Il y a ${data.home.userCount} inscrit${data.home.userCount > 1 ? 's' : ''}`}
      </Typography>
      <Box textAlign="center" marginTop="1rem">
        <Button
          component={LinkRouter}
          variant="contained"
          to="/ma-maison"
        >
          Paramétrer
        </Button>
      </Box>
      <Box marginTop="1rem" display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          disabled
        >
          Ajouter une maison
        </Button>
        <Button
          variant="contained"
          disabled
        >
          Rejoindre une maison
        </Button>
      </Box>
    </>
  );

  const displayNoHome = () => (
    <>
      <TileTitle>Ma Maison</TileTitle>
      <Typography variant="h3" color="error" textAlign="center" marginTop="2rem">
        Vous n'avez pas encore de maison
      </Typography>
      <Box marginTop="2rem" display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          onClick={addHomeClick}
        >
          Ajouter une maison
        </Button>
        <Button
          variant="contained"
          onClick={joinHomeClick}
        >
          Rejoindre une maison
        </Button>
      </Box>
    </>
  );

  return (
    <Tile>
      {hasHome && data ? displayWithHome() : displayNoHome()}
    </Tile>
  );
}

HomeTile.propTypes = {
  data: PropTypes.object,
  hasHome: PropTypes.bool,
};

HomeTile.defaultProps = {
  data: null,
  hasHome: false,
};

export default HomeTile;
