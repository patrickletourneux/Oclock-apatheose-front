import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function TileTitle({ children, ...otherProps }) {
  return (
    <Box sx={{
      width: 'auto',
      minHeight: '80px',
      background: 'linear-gradient(90deg, #21C2CF, #49D7BB)',
      color: 'white',
    }}
    >
      <Typography
        variant="h2"
        textAlign="center"
        {...otherProps}
        padding="20px"
      >
        {children}
      </Typography>
    </Box>
  );
}

TileTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TileTitle;
