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
import ModalJoinHome from './ModalJoinHome';
import Countdown from '../Countdown/Countdown';
import ModalCreateHome from './ModalCreateHome/ModalCreateHome';

function HomeTile({ data, hasHome }) {
  const displayWithHome = () => (
    <>
      <TileTitle>{data.home.name}</TileTitle>
      <Typography textAlign="right">
        {`Il y a ${data.home.userCount} inscrit${data.home.userCount > 1 ? 's' : ''}`}
      </Typography>
      <Countdown title={data.reward.title} end_at={data.reward.end_at} />
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
      <Box marginTop="1.5rem" textAlign="center">
        <Button
          component={LinkRouter}
          variant="contained"
          to="/ma-maison"
        >
          Paramétrer
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
      <Box marginTop="2rem" display="flex" justifyContent="center" gap="1rem 2rem" flexWrap="wrap">
        <ModalCreateHome />
        <ModalJoinHome />
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
