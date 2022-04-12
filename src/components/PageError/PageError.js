import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

function PageError({ error, ...otherProps }) {
  if (!error) return '';
  return (
    <Typography textAlign="center" color="error" {...otherProps}>
      {error}
    </Typography>
  );
}

PageError.propTypes = {
  error: PropTypes.string.isRequired,
};

export default PageError;
