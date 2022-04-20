import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

function PageTitle({ children, ...otherProps }) {
  return (
    <Typography variant="h1" textAlign="center" sx={{margin: { xs: '0.5rem 0', md: '2rem 0' }}} {...otherProps}>
      {children}
    </Typography>
  );
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitle;
