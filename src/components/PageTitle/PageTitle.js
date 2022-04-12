import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

function PageTitle({ children, ...otherProps }) {
  return (
    <Typography variant="h1" textAlign="center" margin="1rem 0" {...otherProps}>
      {children}
    </Typography>
  );
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitle;
