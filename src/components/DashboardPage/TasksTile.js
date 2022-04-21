import { Box, Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link as LinkRouter } from 'react-router-dom';

import TileTitle from '../Tile/TileTitle';
import Tile from '../Tile/Tile';
import main from '../../assets/images/main.jpg'

const getDoneTasksCountString = (count) => {
  if (count === 0) {
    return 'Feignasse ! Vous n\'avez réalisé aucune tâche';
  }
  // if ((count) => 1 && (count) < 3) {
  //   return 'Bravo';
  // }
  return (
    <>
      Félicitations, vous êtes productifs comme Jul ! <img src={main} width="32px" /><br /><br/>
      Vous avez réalisé {count} tâche{count > 1 ? 's' : ''}
    </>
  );
};

const getAttributedTasksCountString = (count) => {
  if (count === 0) {
    return 'Vous n\'avez aucune tâche en attente';
  }
  return `Vous avez ${count} tâche${count > 1 ? 's' : ''} en attente`;
};

function TaskTile({ data, hasHome }) {
  const displayWithHome = () => (
    <>
      <TileTitle>Mes Tâches</TileTitle>
      <Typography fontSize="1.7rem" textAlign="center" marginTop="3rem">
        { getDoneTasksCountString(data.user_done_task_count) }
      </Typography>
      <Typography color="#F78F8F" textAlign="center" paddingTop="2rem" marginTop="2rem" fontSize="2rem">
        { getAttributedTasksCountString(data.user_attributed_task_count) }
      </Typography>
      <Box textAlign="center" marginTop="4rem" marginBottom="2rem">
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
        Vous n'avez pas encore de maison associée, vous n'avez pas de tâches pour le moment
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
