import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

function Tile({ children, ...otherProps }) {
  return (
    <Grid
      item
      xs={9}
      md={7}
      xl={3}
      sx={{
        bgcolor: 'white',
        // padding: '1rem',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        borderRadius: '5px',
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
