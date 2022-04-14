import {
  Box,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import UserAvatar from '../UserAvatar/UserAvatar';

const getFirstUserString = (pseudonym, score, isCurrentUserFirst) => {
  if (isCurrentUserFirst) {
    return `Vous êtes 1er avec ${score} point${score > 1 ? 's' : ''}`;
  }
  return `${pseudonym} est 1er avec ${score} point${score > 1 ? 's' : ''}`;
};

function FirstRankingSecondaryTile({ data, isCurrentUserFirst, ...otherProps }) {
  return (
    <Box
      sx={{
        boxShadow: '0 1px 3px black',
        padding: '1rem',
      }}
      {...otherProps}
    >
      <UserAvatar url={data.avatar_img} pseudonym={data.pseudonym} />
      <Typography>{getFirstUserString(data.pseudonym, data.score, isCurrentUserFirst)}</Typography>
    </Box>
  );
}

FirstRankingSecondaryTile.propTypes = {
  data: PropTypes.shape({
    pseudonym: PropTypes.string.isRequired,
    avatar_img: PropTypes.string,
    score: PropTypes.number.isRequired,
  }).isRequired,
  isCurrentUserFirst: PropTypes.bool.isRequired,
};

export default FirstRankingSecondaryTile;
