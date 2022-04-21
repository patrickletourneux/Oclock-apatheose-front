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
    display="flex"
    flexDirection="column"
    justifyContent='center'
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
      <UserAvatar pseudonym={data.pseudonym} />
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
