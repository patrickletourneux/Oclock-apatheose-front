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
  return `vous êtes ${rank}${rank > 1 ? 'ème' : 'er'}`;
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
      sx={{
        boxShadow: '0 1px 3px black',
        padding: '1rem',
      }}
      {...otherProps}
    >
      <UserAvatar pseudonym={data.pseudonym} />
      <Typography>{getRankString(data.rank, isCurrentUserFirst)}</Typography>
      {!isCurrentUserFirst && (
        <Typography>{getScoreString(scoreDifference)}</Typography>
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
