import { Box, Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link as LinkRouter } from 'react-router-dom';

import TileTitle from '../Tile/TileTitle';
import Tile from '../Tile/Tile';

const getDoneTasksCountString = (count) => {
  if (count === 0) {
    return 'Vous n\'avez réalisé aucune tâche';
  }
  return (
    <>
      Félicitations vous êtes productifs comme Jul <br />
      vous avez réalisé {count} tâche{count > 1 ? 's' : ''}
    </>
  );
};

const getAttributedTasksCountString = (count) => {
  if (count === 0) {
    return 'Vous n\'avez aucune tâche en attente';
  }
  return `vous avez ${count} tâche${count > 1 ? 's' : ''} en attente`;
};

function TaskTile({ data, hasHome }) {
  const displayWithHome = () => (
    <>
      <TileTitle>Mes Tâches</TileTitle>
      <Typography textAlign="center" marginTop="2rem">
        { getDoneTasksCountString(data.user_done_task_count) }
      </Typography>
      <Typography textAlign="center" marginTop="2rem">
        { getAttributedTasksCountString(data.user_attributed_task_count) }
      </Typography>
      <Box textAlign="center" marginTop="1.5rem">
        <Button
          component={LinkRouter}
          variant="contained"
          to="/mes-taches"
        >
          Voir mes tâches
        </Button>
      </Box>
    </>
  );

  const displayNoHome = () => (
    <>
      <TileTitle>Mes Tâches</TileTitle>
      <Typography variant="h3" color="error" textAlign="center" marginTop="2rem">
        Vous n'avez pas encore de tâches attribuées
      </Typography>
    </>
  );

  return (
    <Tile>
      {hasHome && data ? displayWithHome() : displayNoHome()}
    </Tile>
  );
}

TaskTile.propTypes = {
  data: PropTypes.shape({
    user_done_task_count: PropTypes.number.isRequired,
    user_attributed_task_count: PropTypes.number.isRequired,
  }),
  hasHome: PropTypes.bool,
};

TaskTile.defaultProps = {
  data: null,
  hasHome: false,
};

export default TaskTile;
