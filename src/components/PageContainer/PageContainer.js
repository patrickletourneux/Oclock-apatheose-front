import PropTypes from 'prop-types';
import { Box } from '@mui/material';

function PageContainer({ children, ...otherProps }) {
  return (
    <Box
      container
      flexGrow="1"
      {...otherProps}
    >
      {children}
    </Box>
  );
}

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
