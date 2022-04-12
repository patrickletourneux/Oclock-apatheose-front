import {
  Box,
  Button,
  Tooltip,
  Typography,
} from '@mui/material';
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
      <Box textAlign="center" marginTop="1.5rem">
        <Button
          component={LinkRouter}
          variant="contained"
          to="/ma-maison"
        >
          Paramétrer
        </Button>
      </Box>
      <Box marginTop="1.5rem" display="flex" justifyContent="center" gap="1rem 2rem" flexWrap="wrap">
        <Tooltip
          title="Pour ajouter une maison, il vous faut au préalable quitter la maison actuelle"
          placement="top"
        >
          <span>
            <Button
              variant="contained"
              disabled
            >
              Ajouter
            </Button>
          </span>
        </Tooltip>
        <Tooltip
          title="Pour rejoindre une maison, il vous faut au préalable quitter la maison actuelle"
          placement="top"
        >
          <span>
            <Button
              variant="contained"
              disabled
            >
              Rejoindre
            </Button>
          </span>
        </Tooltip>
      </Box>
    </>
  );

  const displayNoHome = () => (
    <>
      <TileTitle>Ma Maison</TileTitle>
      <Typography variant="h3" color="error" textAlign="center" marginTop="2rem">
        Vous n'avez pas encore de maison
      </Typography>
      <Box marginTop="2rem" display="flex" justifyContent="center" gap="1rem 2rem" flexWrap="wrap">
        <Button
          variant="contained"
          onClick={addHomeClick}
        >
          Ajouter
        </Button>
        <Button
          variant="contained"
          onClick={joinHomeClick}
        >
          Rejoindre
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
