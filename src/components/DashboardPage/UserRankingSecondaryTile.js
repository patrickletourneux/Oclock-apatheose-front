import {
  Box,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import UserAvatar from '../UserAvatar/UserAvatar';
import you from '../../assets/images/you.png';

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
        width: '80%',
        margin: '0 auto',
      }}
      {...otherProps}
    >
      <Box display="flex" flexDirection="row" gap={3}>
        <UserAvatar pseudonym={data.pseudonym} /><img width="40px" src={you} alt="you" />
      </Box>
      <Typography fontSize="1.7rem" textAlign="center">{getRankString(data.rank, isCurrentUserFirst)}</Typography>
      {!isCurrentUserFirst && (
        <Typography fontSize="1.7rem" textAlign="center">{getScoreString(scoreDifference)}</Typography>
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
