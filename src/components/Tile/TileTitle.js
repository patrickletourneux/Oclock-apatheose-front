import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

function TileTitle({ children, ...otherProps }) {
  return (
    <Typography variant="h2" textAlign="center" {...otherProps}>
      {children}
    </Typography>
  );
}

TileTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TileTitle;
