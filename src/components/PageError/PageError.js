import PropTypes from 'prop-types';
import { Alert } from '@mui/material';

function PageError({ error, ...otherProps }) {
  if (!error) return '';
  return (
    <Alert severity="error" marginBottom="3rem" {...otherProps}>
      {error}
    </Alert>
  );
}

PageError.propTypes = {
  error: PropTypes.string.isRequired,
};

export default PageError;
