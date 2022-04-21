import {
  Box,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import UserAvatar from '../UserAvatar/UserAvatar';

const getRankString = (rank, isCurrentUserFirst) => {
  if (isCurrentUserFirst) {
    return 'Vous êtes la reine des fées du logis, préparez-vous à vous envoler';
  }
  return `Vous êtes ${rank}${rank > 1 ? 'ème' : 'er'}`;
};

const getScoreString = (scoreDifference) => {
  if (scoreDifference > 0) {
    return `Encore un effort, vous avez ${scoreDifference} point${scoreDifference > 1 ? 's' : ''} de retard`;
  }
  return 'Vous êtes à égalité avec le 1er, plus qu\'une tâche pour gagner !';
};

function UserRankingSecondaryTile({
  data,
  isCurrentUserFirst,
  scoreDifference,
  ...otherProps
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
      sx={{
        border: 1,
        borderColor: '#36D1DC',
        // boxShadow: '0 1px 3px ',
        padding: '1rem',
        margin: '.5rem',
      }}
      {...otherProps}
    >
      <UserAvatar pseudonym={data.pseudonym} />
      <Typography>{getRankString(data.rank, isCurrentUserFirst)}</Typography>
      {!isCurrentUserFirst && (
        <Typography textAlign="center">{getScoreString(scoreDifference)}</Typography>
      )}
    </Box>
  );
}

UserRankingSecondaryTile.propTypes = {
  data: PropTypes.shape({
    pseudonym: PropTypes.string.isRequired,
    avatar_img: PropTypes.string,
    score: PropTypes.number.isRequired,
    rank: PropTypes.number.isRequired,
  }).isRequired,
  isCurrentUserFirst: PropTypes.bool.isRequired,
  scoreDifference: PropTypes.number.isRequired,
};

export default UserRankingSecondaryTile;
