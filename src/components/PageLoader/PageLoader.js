import { CircularProgress, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function PageLoader({ isDisplayed, ...otherProps }) {
  if (!isDisplayed) return '';
  return (
    <Typography textAlign="center" {...otherProps}>
      <CircularProgress />
    </Typography>
  );
}

PageLoader.propTypes = {
  isDisplayed: PropTypes.bool.isRequired,
};

export default PageLoader;
