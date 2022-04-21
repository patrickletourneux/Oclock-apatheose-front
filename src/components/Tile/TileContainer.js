import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

function TileContainer({ children, ...otherProps }) {
  return (
    <Grid
      container
      justifyContent="space-evenly"
      gap={3}
      marginTop={7}
      marginBottom={5}
      {...otherProps}
    >
      {children}
    </Grid>
  );
}

TileContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TileContainer;
