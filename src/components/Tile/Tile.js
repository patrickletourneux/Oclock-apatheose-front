import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

function Tile({ children, ...otherProps }) {
  return (
    <Grid
      item
      xs={12}
      md={10}
      xl={4}
      sx={{
        bgcolor: 'white',
        boxShadow: '0 1px 3px black',
        padding: '1rem',
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
