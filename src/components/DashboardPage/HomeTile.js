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
import ModalCreateHome from './ModalCreateHome';

function HomeTile({ data, hasHome }) {
  const displayWithHome = () => (
    <>
      <TileTitle>Ma maison</TileTitle>

      <Box
        textAlign="center"
        borderBottom="1px solid #36D1DC"
        paddingBottom="35px"
      >
        <Typography marginTop="10px" padding variant="h3" fontWeight={700}>
          Nom de la maison :
        </Typography>
        <Typography
          variant="h3"
          maxWidth="70%"
          border="1px solid #36D1DC"
          borderRadius="3px"
          margin="10px auto"
          padding="1rem"
        >
          {data.home.name}
        </Typography>
      </Box>

      <Box textAlign="center" margin="2rem">
        <Typography margin padding variant="h3" fontWeight={700}>
          Nombre de participants cette semaine :
        </Typography>
        <Typography textAlign="center" fontSize="2rem" color="#F78F8F">
          {`Il y a ${data.home.userCount} inscrit${
            data.home.userCount > 1 ? 's' : ''
          }`}
        </Typography>
      </Box>

      <Box
        marginTop="2rem"
        display="flex"
        justifyContent="center"
        gap="1rem 2rem"
        flexWrap="wrap"
      >
        <Tooltip
          title="Pour ajouter une maison, il vous faut au préalable quitter la maison actuelle"
          placement="top"
          enterTouchDelay={1}
        >
          <span>
            <Button variant="contained" disabled>
              Ajouter
            </Button>
          </span>
        </Tooltip>
        <Tooltip
          title="Pour rejoindre une maison, il vous faut au préalable quitter la maison actuelle"
          placement="top"
          enterTouchDelay={1}
        >
          <span>
            <Button variant="contained" disabled>
              Rejoindre
            </Button>
          </span>
        </Tooltip>
      </Box>
      <Box marginTop="2rem" textAlign="center" marginBottom="2rem">
        <Button component={LinkRouter} variant="contained" to="/ma-maison">
          Paramétrer
        </Button>
      </Box>
    </>
  );

  const displayNoHome = () => (
    <>
      <TileTitle>Ma Maison</TileTitle>
      <Typography
        variant="h3"
        color="error"
        textAlign="center"
        marginTop="2rem"
        padding="0 1rem"
      >
        Vous n'avez pas encore de maison
      </Typography>
      <Box
        marginTop="2rem"
        marginBottom="2rem"
        display="flex"
        justifyContent="center"
        gap="1rem 2rem"
        flexWrap="wrap"
      >
        <ModalCreateHome />
        <ModalJoinHome />
      </Box>
    </>
  );

  return <Tile>{hasHome && data ? displayWithHome() : displayNoHome()}</Tile>;
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
