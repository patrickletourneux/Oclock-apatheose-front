import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

function Tile({ children, ...otherProps }) {
  return (
    <Grid
      item
      xs={10}
      md={7}
      xl={3}
      sx={{
        bgcolor: 'white',
        // boxShadow: '0 3px 8px rgba(0, 0, 0, 0.24)',
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        padding: '1rem',
        borderRadius: '5px'
      }}
      {...otherProps}
    >
      {children}
    </Grid>
  );
}

Tile.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tile;
