import PropTypes from 'prop-types';
import { Alert, AlertTitle } from '@mui/material';
import { Link } from 'react-router-dom';

function PageNoHome({ hasHome }) {
  if (hasHome) {
    return ('');
  }
  return (
    <Alert sx={{ marginTop: '3rem', textAlign: 'center', justifyContent: 'center' }} severity="info">
      <AlertTitle>Vous n'avez pas encore de maison !</AlertTitle>
      <Link
        to="/tableau-de-bord"
        style={{ color: '#1ba2ac' }}
      >
        Retourner sur le tableau de bord
      </Link>
    </Alert>
  );
}

PageNoHome.propTypes = {
  hasHome: PropTypes.bool.isRequired,
};

export default PageNoHome;
