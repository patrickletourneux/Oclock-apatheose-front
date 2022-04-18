import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

function TileTitle({ children, ...otherProps }) {
  return (
    <Typography variant="h2" textAlign="center" backgroundColor="linear-gradient(90deg, #21C2CF, #49D7BB)" {...otherProps}>
      {children}
    </Typography>
  );
}

TileTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TileTitle;
